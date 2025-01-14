// server/models/Budget.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IBudget extends Document {
  category: string;
  amount: number;
  spent: number;
  period: "monthly" | "yearly";
  startDate: Date;
  endDate: Date;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const BudgetSchema = new Schema(
  {
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    spent: { type: Number, default: 0 },
    period: { type: String, enum: ["monthly", "yearly"], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IBudget>("Budget", BudgetSchema);
