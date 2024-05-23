import { Request, Response, NextFunction } from "express";

export const handleError = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof Error) {
    res.status(500).send(error.message);
  }
  if (typeof error === "object" && error !== null && "response" in error) {
    // Axios error
    const err = error as { response: { data: string } };
    res.status(500).send(err.response.data);
  }
  res.status(500).send("Unknown error");

  next(error);
};
