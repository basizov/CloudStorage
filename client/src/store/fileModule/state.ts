import { IFile } from "@/models/IFile";

export type FileState = {
  files: IFile[];
  currentDir: string | null;
};

const state: FileState = {
  files: [],
  currentDir: null
};

export default state;
