import { IUser } from "@/models/IUser";
import { CommonState } from "./state";

export enum CommonGettersTypes {
  GET_USER = 'getUser',
  GET_IS_AUTH = 'getIsAuth',
};

export interface CommonGetters {
  [CommonGettersTypes.GET_USER]: IUser | null;
  [CommonGettersTypes.GET_IS_AUTH]: boolean;
};

export type GettersDefinition = {
  [P in keyof CommonGetters]: (state: CommonState, getters: CommonGetters) => CommonGetters[P];
}

const getters: GettersDefinition = {
  [CommonGettersTypes.GET_USER]: state => state.user,
  [CommonGettersTypes.GET_IS_AUTH]: state => state.isAuth
};

export default getters;
