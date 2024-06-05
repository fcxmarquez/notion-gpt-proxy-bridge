import express, { Express } from "express";
import { blockRouter } from "./block.router";
import { searchRouter } from "./search.router";
import { databaseRouter } from "./database.router";
import { pageRouter } from "./page.router";

export const routerApi = (app: Express) => {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/blocks", blockRouter);
  router.use("/pages", pageRouter);
  router.use("/search", searchRouter);
  router.use("/database", databaseRouter);
};
