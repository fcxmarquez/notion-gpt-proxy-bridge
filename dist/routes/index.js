"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApi = void 0;
const express_1 = __importDefault(require("express"));
const block_router_1 = require("./block.router");
const search_router_1 = require("./search.router");
const database_router_1 = require("./database.router");
const routerApi = (app) => {
  const router = express_1.default.Router();
  app.use("/api/v1", router);
  router.use("/blocks", block_router_1.blockRouter);
  router.use("/search", search_router_1.searchRouter);
  router.use("/database", database_router_1.databaseRouter);
};
exports.routerApi = routerApi;
//# sourceMappingURL=index.js.map
