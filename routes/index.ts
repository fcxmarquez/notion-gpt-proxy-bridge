import express, { Express } from "express";
import { pageRouter } from "./page.router";
import { searchRouter } from "./search.router";
import { databaseRouter } from "./database.router";

export const routerApi = (app: Express) => {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/page", pageRouter);
  router.use("/search", searchRouter);
  router.use("/database", databaseRouter);
};
