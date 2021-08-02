import { AxiosResponse } from "axios";
import { IAuth } from "@/models/IAuth";
import axios from "./axios";
import { IUser } from "@/models/IUser";

enum IRequestPaths {
  REGISTER_PATH = '/authorize/registration',
  LOGIN_PATH = '/authorize/login',
};

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody)
};

const Auth = {
  register: (user: IAuth) => requests.post<IAuth>(IRequestPaths.REGISTER_PATH, user),
  login: (user: IAuth) => requests.post<IUser>(IRequestPaths.LOGIN_PATH, user),
};

export default {
  Auth
};
