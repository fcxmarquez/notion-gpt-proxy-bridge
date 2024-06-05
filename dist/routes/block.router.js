"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockRouter = void 0;
const express_1 = __importDefault(require("express"));
const block_controller_1 = require("../controllers/block.controller");
const router = express_1.default.Router();
router.get("/:id", block_controller_1.getBlockController);
router.get("/:id/children", block_controller_1.getBlockChildrenController);
router.patch("/:id", block_controller_1.updateBlockController);
router.patch("/:id/children", block_controller_1.appendBlockChildrenController);
router.delete("/:id", block_controller_1.deleteBlockController);
exports.blockRouter = router;
//# sourceMappingURL=block.router.js.map