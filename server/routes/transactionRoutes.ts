// server/routes/transactionRoutes.ts
import { Router, RequestHandler } from "express";
import { transactionController } from "../controllers/transactionController";
import { auth } from "../middleware/auth";

const router = Router();

// Cast the auth middleware to RequestHandler
router.use(auth as RequestHandler);

// Cast controller methods to RequestHandler
router.post("/", transactionController.create as RequestHandler);
router.get("/", transactionController.getAll as RequestHandler);
router.get("/:id", transactionController.getById as RequestHandler);
router.put("/:id", transactionController.update as RequestHandler);
router.delete("/:id", transactionController.delete as RequestHandler);

export default router;
