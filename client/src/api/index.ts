import { AxiosResponse } from "axios";
import { IAuth } from "@/models/IAuth";
import axios from "./axios";
import { IUser } from "@/models/IUser";
import { IRequestFile, ICreateFile } from "@/models/IFile";

export enum IRequestPaths {
  REGISTER_PATH = '/authorize/registration',
  LOGIN_PATH = '/authorize/login',
  AUTH_PATH = '/authorize/auth',
  FILES = '/file',
  UPLOAD_FILE = '/file/upload',
  DOWNLOAD_FILE = '/file/download',
  DELETE_FILE = '/file/delete'
};

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string, params?: URLSearchParams) => axios.get<T>(url, {
    params
  }).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody)
};

const Auth = {
  register: (user: IAuth) => requests.post<IAuth>(IRequestPaths.REGISTER_PATH, user),
  login: (user: IAuth) => requests.post<IUser>(IRequestPaths.LOGIN_PATH, user),
  auth: () => requests.get<IUser>(IRequestPaths.AUTH_PATH)
};

const File = {
  getFiles: (params?: URLSearchParams | null) => requests.get<IRequestFile[]>(
    IRequestPaths.FILES,
    params ?? new URLSearchParams()
  ),
  createDir: (file: ICreateFile) => requests.post<IRequestFile>(IRequestPaths.FILES, file),
  uploadFile: (file: FormData) => requests.post<IRequestFile>(IRequestPaths.UPLOAD_FILE, file),
  downloadFile: (id: string) => axios.get(`${IRequestPaths.DOWNLOAD_FILE}?id=${id}`, {
    responseType: 'blob'
  }).then(res => res as AxiosResponse<Blob>),
  deleteFile: (id: string) => requests.delete<string>(`${IRequestPaths.DELETE_FILE}?id=${id}`)
};

export default {
  Auth,
  File
};
