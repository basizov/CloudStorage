import state, { FileState } from "./state";
import { CommitOptions, DispatchOptions, Module, Store as VuexStore } from "vuex";
import mutations, { FileMutations } from "./mutations";
import getters, { GettersDefinition } from "./getters";
import actions, { IFileActions } from "./actions";
import { CommonState } from "../commonModule/state";

export type FileModule<S = FileState> = Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'> & {
  commit<K extends keyof FileMutations>(
    key: K,
    payload?: Parameters<FileMutations[K]>[1],
    options?: CommitOptions
  ): ReturnType<FileMutations[K]>;
} & {
  getters: {
    [K in keyof GettersDefinition]: ReturnType<GettersDefinition[K]>;
  };
} & {
  dispatch<K extends keyof IFileActions>(
    key: K,
    payload?: Parameters<IFileActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<IFileActions[K]>
};

const fileModule: Module<FileState, CommonState> = {
  getters: getters,
  state: state,
  mutations: mutations,
  actions: actions
};

export default fileModule;
