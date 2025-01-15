// server/routes/accountRoutes.ts
import { Router, RequestHandler } from "express";
import { accountController } from "../controllers/accountController";
import { auth } from "../middleware/auth";

const router = Router();

// Cast auth middleware to RequestHandler
router.use(auth as RequestHandler);

// Cast controller methods to RequestHandler
router.post("/", accountController.create as RequestHandler);
router.get("/", accountController.getAll as RequestHandler);
router.get("/:id", accountController.getById as RequestHandler);
router.put("/:id", accountController.update as RequestHandler);
router.delete("/:id", accountController.delete as RequestHandler);

export default router;
