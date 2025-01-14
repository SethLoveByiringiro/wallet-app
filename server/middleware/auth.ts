// server/middleware/auth.ts
import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserRequest } from "../types/express";

export const auth = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get token from header
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ error: "No auth token, access denied" });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key"
    ) as { id: string };

    // Add user to request
    req.user = {
      id: decoded.id,
    };

    next();
  } catch (error) {
    res.status(401).json({ error: "Token is invalid" });
  }
};
