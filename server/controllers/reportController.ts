// server/controllers/reportController.ts
import { Response, RequestHandler } from "express";
import { UserRequest } from "../types/express";
import { prisma } from "../lib/prisma";

export const reportController = {
  getMonthlySummary: async (req: UserRequest, res: Response) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);

      const transactions = await prisma.transaction.findMany({
        where: {
          userId,
          date: {
            gte: startOfMonth,
          },
        },
        include: {
          category: true,
          account: true,
        },
      });

      const summary = {
        totalIncome: 0,
        totalExpenses: 0,
        netSavings: 0,
        transactionCount: transactions.length,
        accountBalances: {},
        topExpenseCategories: [],
      };

      // Calculate totals
      transactions.forEach((transaction) => {
        if (transaction.type === "income") {
          summary.totalIncome += transaction.amount;
        } else {
          summary.totalExpenses += transaction.amount;
        }
      });

      summary.netSavings = summary.totalIncome - summary.totalExpenses;

      res.json(summary);
    } catch (error) {
      res.status(500).json({ message: "Error generating monthly summary" });
    }
  },

  getCategoryBreakdown: async (req: UserRequest, res: Response) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "User not authenticated" });
      }

      const startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 1);

      const transactions = await prisma.transaction.findMany({
        where: {
          userId,
          date: {
            gte: startDate,
          },
        },
        include: {
          category: true,
        },
      });

      // Group transactions by category
      const categoryBreakdown = transactions.reduce((acc, transaction) => {
        const categoryId = transaction.category.id;
        if (!acc[categoryId]) {
          acc[categoryId] = {
            categoryName: transaction.category.name,
            total: 0,
            transactionCount: 0,
            percentage: 0,
          };
        }
        acc[categoryId].total += transaction.amount;
        acc[categoryId].transactionCount += 1;
        return acc;
      }, {});

      // Calculate percentages
      const totalAmount = Object.values(categoryBreakdown).reduce(
        (sum: number, category: any) => sum + category.total,
        0
      );

      Object.values(categoryBreakdown).forEach((category: any) => {
        category.percentage = (category.total / totalAmount) * 100;
      });

      res.json({
        breakdown: categoryBreakdown,
        totalAmount,
      });
    } catch (error) {
      res.status(500).json({ message: "Error generating category breakdown" });
    }
  },
} as const;
