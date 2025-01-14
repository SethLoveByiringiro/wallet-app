// server/routes/reportRoutes.ts
import { Router } from "express";
import { reportController } from "../controllers/reportController";
import { auth } from "../middleware/auth";

const router = Router();

router.use(auth);

router.get("/monthly-summary", reportController.getMonthlySummary);
router.get("/category-breakdown", reportController.getCategoryBreakdown);

export default router;
