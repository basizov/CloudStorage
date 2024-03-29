import { Router } from "express";
import { check } from "express-validator";
import UserController from "../controllers/UserController";
import { ERouterLinks } from "../domain/enums/ERouterLinks";
import authMiddleware from "../middleware/authMiddleware";

const router: Router = Router();

enum ERegister {
  EMAIL_FIELD = 'email',
  PASSWORD_FIELD = 'password'
};

router.post(ERouterLinks.REGISTRATION_ROUTE, [
  check(ERegister.EMAIL_FIELD, 'Uncorrect email :(').isEmail(),
  check(ERegister.PASSWORD_FIELD, 'Password must be longer than 3 and shorter than 12').isLength({
    min: 3,
    max: 12
  })
], UserController.register);
router.post(ERouterLinks.LOGIN_ROUTE, UserController.login);
router.get(ERouterLinks.AUTHORIZE_TOKEN_ROUTE, authMiddleware, UserController.auth);

export default router;
