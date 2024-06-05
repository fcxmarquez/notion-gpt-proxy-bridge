import express from "express";
import {
  appendBlockChildrenController,
  deleteBlockController,
  getBlockChildrenController,
  getBlockController,
  updateBlockController,
} from "@/controllers/block.controller";

const router = express.Router();

router.get("/:id", getBlockController);
router.get("/:id/children", getBlockChildrenController);
router.patch("/:id", updateBlockController);
router.patch("/:id/children", appendBlockChildrenController);
router.delete("/:id", deleteBlockController);

export const blockRouter = router;
