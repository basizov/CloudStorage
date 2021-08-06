import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";
import { ILoginForm, IRegister } from "../domain/interfaces/IAuthorize";
import { IUser } from "../domain/interfaces/IUser";
import ApplicationError from "../domain/models/ApplicationError";
import File from "../domain/models/File";
import { IAuthRequest } from "../middleware/authMiddleware";
import FileService from "../services/FileService";
import UserService from "../services/UserService";

interface IRegisterRequest extends IAuthRequest {
  body: IRegister;
};

interface ILoginRequest extends Request {
  body: ILoginForm;
};

class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const error = validationResult(req as IRegisterRequest);

      if (!error.isEmpty()) {
        throw ApplicationError.badRequest('Uncorrect request!');
      }
      const user: IUser = await UserService.register((req as IRegisterRequest).body);

      res.json(user);
      FileService.createDirectory(new File({ userId: user._id, name: '' }));
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

  async auth(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.auth((req as IAuthRequest).id);

      res.json(user);
    } catch (e) {
      next(e as ApplicationError);
    }
  };
};

export default new UserController();
