import { Document } from "mongoose";

export interface IFile extends Document {
  id: string;
  name: string;
  type: string;
  path: string;
  created: Date;
  accessLink: string;
  size: number;
  userId: string;
  parentId: string;
  childs: string[];
};
