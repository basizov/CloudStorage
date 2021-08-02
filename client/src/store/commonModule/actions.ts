import { IUser } from "@/models/IUser";
import { ActionContext, ActionTree } from "vuex";
import { CommonState } from "./state";

export enum CommonActions {
  GET_USER = 'getUser'
};

export interface ICommonActions {
  [CommonActions.GET_USER]: ({ state }: ActionContext<CommonState, CommonState>) => IUser | null;
};

const actions: ActionTree<CommonState, CommonState> & ICommonActions = {
  [CommonActions.GET_USER]: ({ state }: ActionContext<CommonState, CommonState>) => {
    return state.user;
  }
};

export default actions;
