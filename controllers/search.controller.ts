import { Request, Response, NextFunction } from "express";
import { SearchService } from "@/services/search.service";

const searchService = new SearchService();

export const postSearch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pageData = req.body;
    const authorization = req.headers.authorization || "";
    const searchResult = await searchService.search(pageData, authorization);
    res.json(searchResult);
  } catch (error) {
    next(error);
  }
};
