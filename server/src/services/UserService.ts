import { IRegister } from "../domain/interfaces/IRegister";
import ApplicationError from "../domain/models/ApplicationError";
import User from "../domain/models/User";
import bcrypt from 'bcrypt';

class UserService {
  async register({ email, password }: IRegister) {
    const candidate = User.findOne({ email });

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
  }
};

export default new UserService();
