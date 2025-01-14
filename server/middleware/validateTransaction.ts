// server/middleware/validateTransaction.ts
import { Request, Response, NextFunction } from "express";

export const validateTransaction = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { type, amount, description, category, accountId } = req.body;

  // Validate transaction type
  if (!type || !["income", "expense"].includes(type)) {
    return res.status(400).json({ error: "Invalid transaction type" });
  }

  // Validate amount
  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  // Validate description
  if (!description || description.trim().length === 0) {
    return res.status(400).json({ error: "Description is required" });
  }

  // Validate category
  if (!category || category.trim().length === 0) {
    return res.status(400).json({ error: "Category is required" });
  }

  // Validate accountId
  if (!accountId) {
    return res.status(400).json({ error: "Account ID is required" });
  }

  next();
};
