import { IUser } from "@/models/IUser";
import { MutationTree } from "vuex";
import { CommonState } from "./state";

export enum CommonMutationsTypes {
  SET_USER = 'setUser',
  SET_IS_AUTH = 'setIsAuth'
};

export type CommonMutations<S = CommonState> = {
  [CommonMutationsTypes.SET_USER]: (state: S, user: IUser | null) => void;
  [CommonMutationsTypes.SET_IS_AUTH]: (state: S, isAuth: boolean) => void;
};

const mutations: MutationTree<CommonState> & CommonMutations = {
  [CommonMutationsTypes.SET_USER]: (state: CommonState, user: IUser | null) => {
    state.user = user;
  },
  [CommonMutationsTypes.SET_IS_AUTH]: (state: CommonState, isAuth: boolean) => {
    state.isAuth = isAuth;
  }
};

export default mutations;
