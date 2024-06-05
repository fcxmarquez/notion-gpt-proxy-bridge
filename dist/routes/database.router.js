"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseRouter = void 0;
const express_1 = require("express");
const database_controller_1 = require("../controllers/database.controller");
const router = (0, express_1.Router)();
router.get("/:id", database_controller_1.getDatabaseController);
exports.databaseRouter = router;
//# sourceMappingURL=database.router.js.map
