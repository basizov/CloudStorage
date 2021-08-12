import { IFile } from "@/models/IFile";
import { FileState } from "./state";

export enum FileGettersTypes {
  GET_FILES = 'getFiles',
  GET_CURRENT_DIR = 'getCurrentDir',
};

export interface FileGetters {
  [FileGettersTypes.GET_FILES]: IFile[];
  [FileGettersTypes.GET_CURRENT_DIR]: string | null;
};

export type GettersDefinition = {
  [P in keyof FileGetters]: (state: FileState, getters: FileGetters) => FileGetters[P];
}

const getters: GettersDefinition = {
  [FileGettersTypes.GET_FILES]: state => state.files,
  [FileGettersTypes.GET_CURRENT_DIR]: state => state.currentDir
};

export default getters;
