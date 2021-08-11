import { IFile } from "@/models/IFIle";

export type FileState = {
  files: IFile[];
  currentDir: string | null;
};

const state: FileState = {
  files: [],
  currentDir: null
};

export default state;
