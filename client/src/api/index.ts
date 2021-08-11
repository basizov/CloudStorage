import { AxiosResponse } from "axios";
import { IAuth } from "@/models/IAuth";
import axios from "./axios";
import { IUser } from "@/models/IUser";
import { IFile } from "@/models/IFIle";

enum IRequestPaths {
  REGISTER_PATH = '/authorize/registration',
  LOGIN_PATH = '/authorize/login',
  AUTH_PATH = '/authorize/auth',
  GET_FILES = '/file'
};

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string, params?: URLSearchParams) => axios.get<T>(url, {
    params
  }).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody)
};

const Auth = {
  register: (user: IAuth) => requests.post<IAuth>(IRequestPaths.REGISTER_PATH, user),
  login: (user: IAuth) => requests.post<IUser>(IRequestPaths.LOGIN_PATH, user),
  auth: () => requests.get<IUser>(IRequestPaths.AUTH_PATH)
};

const File = {
  getFiles: (params?: URLSearchParams | null) => requests.get<IFile[]>(
    IRequestPaths.GET_FILES,
    params ?? new URLSearchParams()
  )
};

export default {
  Auth,
  File
};
