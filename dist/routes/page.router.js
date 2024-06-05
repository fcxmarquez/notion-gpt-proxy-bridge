"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageRouter = void 0;
const express_1 = __importDefault(require("express"));
const page_controller_1 = require("../controllers/page.controller");
const router = express_1.default.Router();
router.get("/childrens/:id", page_controller_1.getPageController);
router.patch("/:id", page_controller_1.updatePageController);
exports.pageRouter = router;
//# sourceMappingURL=page.router.js.map