import { IUser } from "@/models/IUser";
import { MutationTree } from "vuex";
import { CommonState } from "./state";

export enum CommonMutationsTypes {
  SET_USER = 'setUser'
};

export type CommonMutations<S = CommonState> = {
  [CommonMutationsTypes.SET_USER]: (state: S, user: IUser | null) => void;
};

const mutations: MutationTree<CommonState> & CommonMutations = {
  [CommonMutationsTypes.SET_USER]: (state: CommonState, user: IUser | null) => {
    state.user = user;
  }
};

export default mutations;
