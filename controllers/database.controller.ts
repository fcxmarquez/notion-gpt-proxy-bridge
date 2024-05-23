import { Request, Response, NextFunction } from "express";
import { DatabaseService } from "@/services/database.service";

const databaseService = new DatabaseService();

export const getDatabaseController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const databaseId = req.params.id;
    const authorization = req.headers.authorization || "";
    const response = await databaseService.getDatabase(databaseId, authorization);
    res.send(response.data);
  } catch (error) {
    next(error);
  }
};
