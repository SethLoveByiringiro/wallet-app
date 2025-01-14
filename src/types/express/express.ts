// server/types/express.ts
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface UserPayload extends JwtPayload {
  id: string;
  email: string;
}

export interface UserRequest extends Request {
  user?: UserPayload;
}
