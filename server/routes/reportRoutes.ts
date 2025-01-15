// server/routes/reportRoutes.ts
import { Router, RequestHandler } from "express";
import { reportController } from "../controllers/reportController";
import { auth } from "../middleware/auth";

const router = Router();

// Cast auth middleware to RequestHandler
router.use(auth as RequestHandler);

// Cast controller methods to RequestHandler
router.get(
  "/monthly-summary",
  reportController.getMonthlySummary as RequestHandler
);
router.get(
  "/category-breakdown",
  reportController.getCategoryBreakdown as RequestHandler
);

export default router;
