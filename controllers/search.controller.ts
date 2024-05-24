import { Request, Response, NextFunction } from "express";
import { SearchService } from "@/services/search.service";

const searchService = new SearchService();

export const getSearch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = req.query.q as string;
    const authorization = req.headers.authorization || "";
    const searchResult = await searchService.search(query, authorization);
    res.json(searchResult);
  } catch (error) {
    next(error);
  }
};
