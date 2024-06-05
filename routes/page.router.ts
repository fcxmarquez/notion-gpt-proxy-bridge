import express from "express";
import { getPageController } from "@/controllers/page.controller";

const router = express.Router();

router.get("/:id", getPageController);

export const pageRouter = router;
