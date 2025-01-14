// server/controllers/accountController.ts
import { Response } from "express";
import Account from "../models/Account";
import Transaction from "../models/Transaction";
import { Request as ExpressRequest } from "express";

export interface UserPayload {
  id: string;
}

export interface UserRequest extends ExpressRequest {
  user?: UserPayload;
}

// Add type guard to ensure user exists
const ensureAuth = (
  req: UserRequest
): req is UserRequest & { user: UserPayload } => {
  return req.user !== undefined;
};

export const accountController = {
  // Create new account
  create: async (req: UserRequest, res: Response) => {
    // ... code remains the same
  },

  // Get all accounts for user
  getAll: async (req: UserRequest, res: Response) => {
    // ... code remains the same
  },

  // Get account by ID
  getById: async (req: UserRequest, res: Response) => {
    // Changed from Request to UserRequest
    try {
      if (!ensureAuth(req)) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const account = await Account.findOne({
        _id: req.params.id,
        userId: req.user.id,
      });

      if (!account) {
        return res.status(404).json({ error: "Account not found" });
      }

      res.json(account);
    } catch (error) {
      res.status(500).json({ error: "Error fetching account" });
    }
  },

  // Update account
  update: async (req: UserRequest, res: Response) => {
    // Changed from Request to UserRequest
    try {
      if (!ensureAuth(req)) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const { name, type } = req.body;
      const account = await Account.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        { name, type },
        { new: true }
      );

      if (!account) {
        return res.status(404).json({ error: "Account not found" });
      }

      res.json(account);
    } catch (error) {
      res.status(500).json({ error: "Error updating account" });
    }
  },

  // Delete account
  delete: async (req: UserRequest, res: Response) => {
    // Changed from Request to UserRequest
    try {
      if (!ensureAuth(req)) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const account = await Account.findOne({
        _id: req.params.id,
        userId: req.user.id,
      });

      if (!account) {
        return res.status(404).json({ error: "Account not found" });
      }

      // Check if account has any transactions
      const hasTransactions = await Transaction.exists({
        account: account._id,
      });
      if (hasTransactions) {
        return res.status(400).json({
          error: "Cannot delete account with existing transactions",
        });
      }

      await account.deleteOne();
      res.json({ message: "Account deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error deleting account" });
    }
  },
};
