import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";
import { ILoginForm, IRegister } from "../domain/interfaces/IAuthorize";
import ApplicationError from "../domain/models/ApplicationError";
import UserService from "../services/UserService";

interface IRegisterRequest extends Request {
  body: IRegister;
};

interface ILoginRequest extends Request {
  body: ILoginForm;
};

class UserController {
  async register(req: IRegisterRequest, res: Response, next: NextFunction) {
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
  };

  async login(req: ILoginRequest, res: Response, next: NextFunction) {
    try {
      const user = await UserService.login(req.body);

      res.json(user);
    } catch (e) {
      next(e as ApplicationError);
    }
  };
};

export default new UserController();
