// server/middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  status?: number;
  code?: number;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // MongoDB duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({
      status: "error",
      message: "Duplicate field value entered",
    });
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err).map((val) => val.message);
    return res.status(400).json({
      status: "error",
      message: messages,
    });
  }

  // JWT error
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      status: "error",
      message: "Invalid token",
    });
  }

  // Default error
  return res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Server Error",
  });
};

// Catch async errors middleware
export const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
