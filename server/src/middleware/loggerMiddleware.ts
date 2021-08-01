import { NextFunction, Response, Request } from "express";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(`${req.method} ${req.path}`, {
      color: 'green'
    });
    next();
  } catch (e) {
    const error = e as Error;

    console.log(error, {
      color: 'red'
    });
  }
};

export default loggerMiddleware;
