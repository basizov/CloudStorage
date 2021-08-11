import state, { CommonState } from "./state";
import { CommitOptions, DispatchOptions, Module, ModuleTree, Store as VuexStore } from "vuex";
import mutations, { CommonMutations } from "./mutations";
import actions, { ICommonActions } from "./actions";
import getters, { GettersDefinition } from "./getters";
import fileModule from '../fileModule'

export type CommonModule<S = CommonState> = Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'> & {
  commit<K extends keyof CommonMutations>(
    key: K,
    payload?: Parameters<CommonMutations[K]>[1],
    options?: CommitOptions
  ): ReturnType<CommonMutations[K]>;
} & {
  getters: {
    [K in keyof GettersDefinition]: ReturnType<GettersDefinition[K]>;
  };
} & {
  dispatch<K extends keyof ICommonActions>(
    key: K,
    payload?: Parameters<ICommonActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ICommonActions[K]>
};

const modules: ModuleTree<CommonState> = {
  fileModule,
};

const commonModule: Module<CommonState, CommonState> = {
  getters: getters,
  state: state,
  mutations: mutations,
  actions: actions,
  modules: modules
};

export default commonModule;
