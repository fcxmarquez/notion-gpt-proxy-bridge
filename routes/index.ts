import express, { Express } from "express";
import { pageRouter } from "routes/page.router";
import searchRouter from "routes/search.router";
import databaseRouter from "routes/database.router";

export const routerApi = (app: Express) => {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/page", pageRouter);
  router.use("/search", searchRouter);
  router.use("/database", databaseRouter);
};
