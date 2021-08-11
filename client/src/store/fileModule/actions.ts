import { getFilesHandler } from "@/api/files";
import { ActionContext, ActionTree } from "vuex";
import { Modules } from "..";
import { CommonState } from "../commonModule/state";
import { FileMutations, FileMutationsTypes } from "./mutations";
import { FileState } from "./state";

export enum FileActions {
  GET_FILES = 'getFiles'
};

export enum AllFileActions {
  GET_FILES = 'fileModule/getFiles'
};

type AugmentedActionContext = {
  commit<K extends keyof FileMutations>(
    key: K,
    payload?: Parameters<FileMutations[K]>[1]
  ): ReturnType<FileMutations[K]>
} & Omit<ActionContext<FileState, CommonState>, 'commit'>

export interface IFileActions {
  [FileActions.GET_FILES]: ({ state, commit }: AugmentedActionContext) => void;
};

const actions: ActionTree<FileState, CommonState> & IFileActions = {
  [FileActions.GET_FILES]: async ({ state, commit }: AugmentedActionContext) => {
    const files = await getFilesHandler(state.currentDir);

    if (files) {
      commit(FileMutationsTypes.SET_FILES, files);
      console.log(files);
    }
  }
}

export default actions;
