import express from "express";
import { getPageController, updatePageController } from "@/controllers/page.controller";

const router = express.Router();

router.get("/childrens/:id", getPageController);
router.patch("/:id", updatePageController);

export const pageRouter = router;
