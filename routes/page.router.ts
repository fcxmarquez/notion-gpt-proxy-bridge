import express from "express";
import { getPageController, updatePageController } from "@/controllers/page.controller";

const router = express.Router();

router.get("/page/:id", getPageController);
router.patch("/page/:id", updatePageController);

export const pageRouter = router;
