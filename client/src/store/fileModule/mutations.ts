import { IFile } from "@/models/IFIle";
import { MutationTree } from "vuex";
import { FileState } from "./state";

export enum FileMutationsTypes {
  SET_FILES = 'setFiles',
  SET_CURRENT_DIR = 'setCurrentDir'
};

export type FileMutations<S = FileState> = {
  [FileMutationsTypes.SET_FILES]: (state: S, files: IFile[]) => void;
  [FileMutationsTypes.SET_CURRENT_DIR]: (state: S, currentDir: string | null) => void;
}

const mutations: MutationTree<FileState> & FileMutations = {
  [FileMutationsTypes.SET_FILES]: (state: FileState, files: IFile[]) => {
    state.files = files;
  },
  [FileMutationsTypes.SET_CURRENT_DIR]: (state: FileState, currentDir: string | null) => {
    state.currentDir = currentDir;
  }
};

export default mutations;
