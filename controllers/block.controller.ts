import { Request, Response, NextFunction } from "express";
import { BlockService } from "@/services/block.service";

const blockService = new BlockService();

export const getBlockController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blockId = req.params.id;
    const authorization = req.headers.authorization || "";
    const data = await blockService.getBlock(blockId, authorization);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

export const getBlockChildrenController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pageId = req.params.id;
    const authorization = req.headers.authorization || "";
    const data = await blockService.getBlockChildren(pageId, authorization);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

export const updateBlockController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pageId = req.params.id;
    const updates = req.body;
    const authorization = req.headers.authorization || "";
    const data = await blockService.updateBlock(pageId, updates, authorization);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

export const appendBlockChildrenController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blockId = req.params.id;
    const children = req.body;
    const authorization = req.headers.authorization || "";
    const data = await blockService.appendBlockChildren(blockId, children, authorization);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

export const deleteBlockController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blockId = req.params.id;
    const authorization = req.headers.authorization || "";
    const data = await blockService.deleteBlock(blockId, authorization);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
