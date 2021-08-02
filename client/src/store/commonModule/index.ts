import state, { CommonState } from "./state";
import { CommitOptions, DispatchOptions, Module, Store as VuexStore } from "vuex";
import mutations, { CommonMutations } from "./mutations";
import { IUser } from "@/models/IUser";
import actions, { ICommonActions } from "./actions";
import getters, { GettersDefinition } from "./getters";

export type CommonModule<S = CommonState> = Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'> & {
  commit<K extends keyof CommonMutations>(
    key: K,
    user: IUser | null,
    options?: CommitOptions
  ): ReturnType<CommonMutations[K]>;
} & {
  getters: {
    [K in keyof GettersDefinition]: ReturnType<GettersDefinition[K]>;
  };
} & {
  dispatch<K extends keyof ICommonActions>(
    key: K,
    options?: DispatchOptions
  ): ReturnType<ICommonActions[K]>
};

const commonModule: Module<CommonState, CommonState> = {
  namespaced: true,
  getters: getters,
  state: state,
  mutations: mutations,
  actions: actions
};

export default commonModule;
