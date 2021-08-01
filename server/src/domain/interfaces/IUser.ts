import { IFile } from "./IFile";

export interface IUser {
  id: string;
  email: string;
  password: string;
  diskSpace: number;
  usedSpace: number;
  avatar: string;
  files: IFile[];
};
