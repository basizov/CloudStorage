import { Document } from "mongoose";
import { IFile } from "./IFile";

export interface IUser extends Document {
  id: string;
  email: string;
  password: string;
  diskSpace: number;
  usedSpace: number;
  avatar: string;
  files: IFile[];
};
