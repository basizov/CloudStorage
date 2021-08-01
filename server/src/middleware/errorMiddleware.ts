import { NextFunction, Response, Request } from "express";
import ApplicationError from "../domain/models/ApplicationError";

const errorMiddleware = (error: ApplicationError, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  res.status(error.status).json({
    message: error.message,
    error: error
  });
};

export default errorMiddleware;
