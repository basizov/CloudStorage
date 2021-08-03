import { IRegister, ILogin, ILoginForm } from "../domain/interfaces/IAuthorize";
import ApplicationError from "../domain/models/ApplicationError";
import User from "../domain/models/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUser } from "../domain/interfaces/IUser";
import config from "../enviroment/config";

class UserService {
  async register({ email, password }: IRegister) {
    const candidate = await User.findOne({ email });

    if (candidate) {
      throw ApplicationError.badRequest(`User with email ${email} already exist!`);
    }
    const hashPassword = await bcrypt.hash(password, 7);
    const newUser = new User({
      email: email,
      password: hashPassword
    });

    await newUser.save();
    return (newUser);
  };

  async login({ email, password }: ILoginForm) {
    const user: IUser = await User.findOne({ email });

    if (!user) {
      throw ApplicationError.notFound('Invalid email');
    }
    const isPassValid = await bcrypt.compare(password, user.password);

    if (!isPassValid) {
      throw ApplicationError.notFound('Invalid password');
    }
    const token = jwt.sign({ id: user.id }, config.SECRET_KEY, { expiresIn: '1h' });
    const loginUser: ILogin = {
      token: token,
      id: user.id,
      email: user.email,
      diskSpace: user.diskSpace,
      usedSpace: user.usedSpace,
      avatar: user.avatar
    };

    return (loginUser)
  };

  async auth(id: string) {
    const user: IUser = await User.findOne({ _id: id });
    const token = jwt.sign({ id: user.id }, config.SECRET_KEY, { expiresIn: '1h' });
    const loginUser: ILogin = {
      token: token,
      id: user.id,
      email: user.email,
      diskSpace: user.diskSpace,
      usedSpace: user.usedSpace,
      avatar: user.avatar
    };

    return (loginUser)
  }
};

export default new UserService();
