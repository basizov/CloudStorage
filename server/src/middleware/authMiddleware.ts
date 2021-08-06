import { NextFunction, Response, Request } from "express";
import jwt from 'jsonwebtoken';
import ApplicationError from "../domain/models/ApplicationError";
import config from "../enviroment/config";

export interface IAuthRequest<T1 = any, T2 = any, T3 = any, T4 = any> extends Request<T1, T2, T3, T4> {
  id: string;
};

export interface IJwt {
  id: string;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.method !== 'OPTIONS' && req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      throw ApplicationError.notAuthorized("User isn't authorized");
    }
    const decoded = jwt.verify(token, config.SECRET_KEY) as IJwt;

    (req as IAuthRequest).id = decoded.id;
  }
  next();
};

export default authMiddleware;
