// server/routes/accountRoutes.ts
import { Router } from "express";
import { accountController } from "../controllers/accountController";
import { auth } from "../middleware/auth";

const router = Router();

// Apply auth middleware to all routes
router.use(auth);

// Define routes with correct types
router.post("/", accountController.create);
router.get("/", accountController.getAll);
router.get("/:id", accountController.getById);
router.put("/:id", accountController.update);
router.delete("/:id", accountController.delete);

export default router;
