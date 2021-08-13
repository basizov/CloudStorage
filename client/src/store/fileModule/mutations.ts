import { IFile } from "@/models/IFile";
import { MutationTree } from "vuex";
import { FileState } from "./state";

export enum FileMutationsTypes {
  SET_FILES = 'setFiles',
  SET_CURRENT_DIR = 'setCurrentDir',
  ADD_FILE = 'addFile',
  DELETE_FILE = 'deleteFile'
};

export type FileMutations<S = FileState> = {
  [FileMutationsTypes.SET_FILES]: (state: S, files: IFile[]) => void;
  [FileMutationsTypes.SET_CURRENT_DIR]: (state: S, currentDir: string | null) => void;
  [FileMutationsTypes.ADD_FILE]: (state: S, file: IFile) => void;
  [FileMutationsTypes.DELETE_FILE]: (state: S, file: IFile) => void;
}

const mutations: MutationTree<FileState> & FileMutations = {
  [FileMutationsTypes.SET_FILES]: (state: FileState, files: IFile[]) => {
    state.files = files;
  },
  [FileMutationsTypes.SET_CURRENT_DIR]: (state: FileState, currentDir: string | null) => {
    state.currentDir = currentDir;
  },
  [FileMutationsTypes.ADD_FILE]: (state: FileState, file: IFile) => {
    state.files.push(file);
  },
  [FileMutationsTypes.DELETE_FILE]: (state: FileState, file: IFile) => {
    state.files = state.files.filter(f => f !== file);
  }
};

export default mutations;
