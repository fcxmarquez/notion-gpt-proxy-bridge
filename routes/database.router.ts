import { Router } from "express";
import { getDatabaseController } from "@/controllers/database.controller";

const router = Router();

router.get("/database/:id", getDatabaseController);

export default router;
