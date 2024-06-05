import { Request, Response, NextFunction } from "express";
import { PageService } from "@/services/page.service";

const pageService = new PageService();

export const getPageController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pageId = req.params.id;
    const authorization = req.headers.authorization || "";
    const data = await pageService.getPage(pageId, authorization);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
