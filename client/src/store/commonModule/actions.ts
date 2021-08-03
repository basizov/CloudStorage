import { loginHandler } from "@/api/authorization";
import { IAuth } from "@/models/IAuth";
import { IUser } from "@/models/IUser";
import { ActionContext, ActionTree } from "vuex";
import { CommonMutations, CommonMutationsTypes } from "./mutations";
import { CommonState } from "./state";

export enum CommonActions {
  LOGIN_USER = 'loginUser',
  LOGOUT_USER = 'logoutUser'
};

type AugmentedActionContext = {
  commit<K extends keyof CommonMutations>(
    key: K,
    payload: Parameters<CommonMutations[K]>[1]
  ): ReturnType<CommonMutations[K]>
} & Omit<ActionContext<CommonState, CommonState>, 'commit'>

export interface ICommonActions {
  [CommonActions.LOGIN_USER]: ({ commit }: AugmentedActionContext, user: IAuth) => void;
  [CommonActions.LOGOUT_USER]: ({ commit }: AugmentedActionContext) => void;
};

const actions: ActionTree<CommonState, CommonState> & ICommonActions = {
  [CommonActions.LOGIN_USER]: async ({ commit }: AugmentedActionContext, loginParams: IAuth) => {
    const user = await loginHandler(loginParams);

    if (user) {
      commit(CommonMutationsTypes.SET_USER, user);
      commit(CommonMutationsTypes.SET_IS_AUTH, true);
      localStorage.setItem('token', user.token);
    }
  },
  [CommonActions.LOGOUT_USER]: ({ commit }: AugmentedActionContext) => {
    commit(CommonMutationsTypes.SET_USER, null);
    commit(CommonMutationsTypes.SET_IS_AUTH, false);
    localStorage.removeItem('token');
  }
};

export default actions;
