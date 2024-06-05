import express from "express";
import { getPageController, createPageController } from "@/controllers/page.controller";

const router = express.Router();

router.get("/:id", getPageController);
router.post("/", createPageController);

export const pageRouter = router;
