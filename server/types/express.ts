import { Request } from "express";

export interface UserPayload {
  id: string;
}

export interface UserRequest extends Request<any, any, any, any> {
  user?: UserPayload;
}
