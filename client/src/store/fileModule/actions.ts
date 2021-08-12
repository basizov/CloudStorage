import { createFileHandler, getFilesHandler, uploadFileHandler } from "@/api/files";
import { ActionContext, ActionTree } from "vuex";
import { CommonState } from "../commonModule/state";
import { FileMutations, FileMutationsTypes } from "./mutations";
import { FileState } from "./state";

export enum FileActions {
  GET_FILES = 'getFiles',
  CREATE_DIRECTORY = 'createDir',
  UPLOAD_FILE = 'uploadFile'
};

type AugmentedActionContext = {
  commit<K extends keyof FileMutations>(
    key: K,
    payload?: Parameters<FileMutations[K]>[1]
  ): ReturnType<FileMutations[K]>
} & Omit<ActionContext<FileState, CommonState>, 'commit'>

export interface IFileActions {
  [FileActions.GET_FILES]: ({ state, commit }: AugmentedActionContext) => void;
  [FileActions.CREATE_DIRECTORY]: ({ state, commit }: AugmentedActionContext, name: string) => void;
  [FileActions.UPLOAD_FILE]: ({ state, commit }: AugmentedActionContext, file: File) => void;
};

const actions: ActionTree<FileState, CommonState> & IFileActions = {
  [FileActions.GET_FILES]: async ({ state, commit }: AugmentedActionContext) => {
    const files = await getFilesHandler(state.currentDir);

    if (files) {
      commit(FileMutationsTypes.SET_FILES, files);
    }
  },
  [FileActions.CREATE_DIRECTORY]: async ({ state, commit }: AugmentedActionContext, name: string) => {
    const fileCreated = await createFileHandler(state.currentDir, name);

    if (fileCreated) {
      commit(FileMutationsTypes.ADD_FILE, fileCreated);
    }
  },
  [FileActions.UPLOAD_FILE]: async ({ state, commit }: AugmentedActionContext, file: File) => {
    const fileCreated = await uploadFileHandler(state.currentDir, file);

    if (fileCreated) {
      commit(FileMutationsTypes.ADD_FILE, fileCreated);
    }
  }
}

export default actions;
