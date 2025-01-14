// server/routes/transactionRoutes.ts
import { Router } from "express";
import { transactionController } from "../controllers/transactionController";
import { auth } from "../middleware/auth";

const router = Router();

// All routes require authentication
router.use(auth);

// CRUD routes
router.post("/", transactionController.create);
router.get("/", transactionController.getAll);
router.get("/:id", transactionController.getById);
router.put("/:id", transactionController.update);
router.delete("/:id", transactionController.delete);

export default router;
