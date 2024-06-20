"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRouter = void 0;
const express_1 = require("express");
const search_controller_1 = require("../controllers/search.controller");
const router = (0, express_1.Router)();
router.post("/", search_controller_1.postSearch);
exports.searchRouter = router;
//# sourceMappingURL=search.router.js.map