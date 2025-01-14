// server/middleware/budgetAlert.ts
import { Response, NextFunction } from "express";
import Budget from "../models/Budget";
import Transaction from "../models/Transaction";
import { Request as ExpressRequest } from "express";

// Define user request type
export interface UserPayload {
  id: string;
}

export interface UserRequest extends ExpressRequest {
  user?: UserPayload;
}

// Add type guard
const ensureAuth = (
  req: UserRequest
): req is UserRequest & { user: UserPayload } => {
  return req.user !== undefined;
};

export const checkBudgetLimits = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!ensureAuth(req)) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { category, amount, type } = req.body;

    if (type === "expense") {
      // Get current month's budget for the category
      const currentDate = new Date();
      const startOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      const endOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );

      const budget = await Budget.findOne({
        userId: req.user.id,
        category,
        startDate: { $lte: currentDate },
        endDate: { $gte: currentDate },
      });

      if (budget) {
        // Calculate current spending
        const currentSpending = await Transaction.aggregate([
          {
            $match: {
              userId: req.user.id,
              category,
              type: "expense",
              date: { $gte: startOfMonth, $lte: endOfMonth },
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$amount" },
            },
          },
        ]);

        const totalSpent = (currentSpending[0]?.total || 0) + amount;
        const percentageUsed = (totalSpent / budget.amount) * 100;

        if (percentageUsed >= 90) {
          // Add warning to response
          res.locals.budgetWarning = {
            message: `This transaction will exceed 90% of your ${category} budget`,
            percentage: percentageUsed,
          };
        }
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};
