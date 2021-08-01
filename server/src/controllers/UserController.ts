import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";
import { IRegister } from "../domain/interfaces/IRegister";
import ApplicationError from "../domain/models/ApplicationError";
import UserService from "../services/UserService";

interface IRequest extends Request {
  body: IRegister;
};

class UserController {
  async register(req: IRequest, res: Response, next: NextFunction) {
    try {
      const error = validationResult(req);

      if (!error.isEmpty()) {
        throw ApplicationError.badRequest('Uncorrect request!');
      }
      const user = await UserService.register(req.body);

      res.json(user);
    } catch (e) {
      next(e as ApplicationError);
    }
  }
};

export default new UserController();
