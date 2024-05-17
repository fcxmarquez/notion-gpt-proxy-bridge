import { Request, Response, NextFunction } from "express";

export const authenticateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send("Authorization header is required");
  }

  return next();
};
