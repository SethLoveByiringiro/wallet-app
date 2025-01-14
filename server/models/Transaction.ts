// server/models/Transaction.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ITransaction extends Document {
  type: "income" | "expense";
  amount: number;
  description: string;
  category: string;
  account: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: true }
);

// Add indexes for better query performance
TransactionSchema.index({ userId: 1, date: -1 });
TransactionSchema.index({ account: 1, date: -1 });
TransactionSchema.index({ category: 1 });

export default mongoose.model<ITransaction>("Transaction", TransactionSchema);
