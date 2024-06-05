"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRouter = void 0;
const express_1 = require("express");
const search_controller_1 = require("../controllers/search.controller");
const router = (0, express_1.Router)();
router.get("/", search_controller_1.getSearch);
exports.searchRouter = router;
//# sourceMappingURL=search.router.js.map