// server/models/Account.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IAccount extends Document {
  name: string;
  type: "bank" | "cash" | "mobile_money";
  balance: number;
  userId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const AccountSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide an account name"],
      trim: true,
    },
    type: {
      type: String,
      enum: ["bank", "cash", "mobile_money"],
      required: [true, "Please specify account type"],
    },
    balance: {
      type: Number,
      default: 0,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// Add index for better query performance
AccountSchema.index({ userId: 1 });

export default mongoose.model<IAccount>("Account", AccountSchema);
