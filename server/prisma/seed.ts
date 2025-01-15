// server/prisma/seed.ts
import { PrismaClient, AccountType } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Create default user
  const hashedPassword = await bcrypt.hash("password123", 10);
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      password: hashedPassword,
      firstName: "Test",
      lastName: "User",
    },
  });

  // Create default categories
  const expenseCategories = [
    "Food & Dining",
    "Transportation",
    "Shopping",
    "Bills & Utilities",
    "Entertainment",
  ];

  const incomeCategories = [
    "Salary",
    "Investments",
    "Freelance",
    "Other Income",
  ];

  // Create expense categories
  for (const name of expenseCategories) {
    await prisma.category.create({
      data: {
        name,
        type: "EXPENSE",
        userId: user.id,
      },
    });
  }

  // Create income categories
  for (const name of incomeCategories) {
    await prisma.category.create({
      data: {
        name,
        type: "INCOME",
        userId: user.id,
      },
    });
  }

  // Create default accounts
  const accounts = [
    {
      name: "Main Bank Account",
      type: "BANK",
      balance: 5000,
      currency: "USD",
    },
    {
      name: "Cash Wallet",
      type: "CASH",
      balance: 500,
      currency: "USD",
    },
    {
      name: "Mobile Money",
      type: "MOBILE_MONEY",
      balance: 300,
      currency: "USD",
    },
  ];

  for (const account of accounts) {
    await prisma.account.create({
      data: {
        ...account,
        userId: user.id,
        type: account.type as AccountType,
      },
    });
  }

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
