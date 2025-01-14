// server/controllers/transactionController.ts
import { Response } from "express";
import Transaction from "../models/Transaction";
import Account from "../models/Account";
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

export const transactionController = {
  // Create new transaction
  create: async (req: UserRequest, res: Response) => {
    try {
      if (!ensureAuth(req)) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const { type, amount, description, category, accountId, date } = req.body;

      // Find the account
      const account = await Account.findOne({
        _id: accountId,
        userId: req.user.id,
      });

      // Rest of the create logic...
    } catch (error) {
      res.status(500).json({ error: "Error creating transaction" });
    }
  },

  // Get all transactions for user
  getAll: async (req: UserRequest, res: Response) => {
    try {
      if (!ensureAuth(req)) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Rest of the getAll logic...
    } catch (error) {
      res.status(500).json({ error: "Error fetching transactions" });
    }
  },

  // Get transaction by ID
  getById: async (req: UserRequest, res: Response) => {
    try {
      if (!ensureAuth(req)) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Rest of the getById logic...
    } catch (error) {
      res.status(500).json({ error: "Error fetching transaction" });
    }
  },

  // Update transaction
  update: async (req: UserRequest, res: Response) => {
    try {
      if (!ensureAuth(req)) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Rest of the update logic...
    } catch (error) {
      res.status(500).json({ error: "Error updating transaction" });
    }
  },

  // Delete transaction
  delete: async (req: UserRequest, res: Response) => {
    try {
      if (!ensureAuth(req)) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Rest of the delete logic...
    } catch (error) {
      res.status(500).json({ error: "Error deleting transaction" });
    }
  },
};
