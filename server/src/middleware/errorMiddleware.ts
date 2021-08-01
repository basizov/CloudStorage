import { NextFunction, Response, Request } from "express";
import ApplicationError from "../domain/models/ApplicationError";

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error instanceof ApplicationError) {
    return res.status(error.status).json({
      message: error.message,
      error: error
    });
  }
  return res.status(500).json({
    message: error.message,
    error: error
  });
};

export default errorMiddleware;
