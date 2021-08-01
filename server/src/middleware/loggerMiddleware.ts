import { NextFunction, Response, Request } from "express";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.info(`${req.method} ${req.path}`);
  next();
};

export default loggerMiddleware;
