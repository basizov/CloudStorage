import { IUser } from "@/models/IUser";
import { CommonState } from "./state";

export enum CommonGettersTypes {
  GET_USER = 'getUser',
  GET_IS_AUTH = 'getIsAuth',
  GET_SHOW_FILE_MENU = 'getShowFileMenu',
  GET_CREATE_FOLDER = 'getShowCreateFolder'
};

export interface CommonGetters {
  [CommonGettersTypes.GET_USER]: IUser | null;
  [CommonGettersTypes.GET_IS_AUTH]: boolean;
  [CommonGettersTypes.GET_SHOW_FILE_MENU]: boolean;
  [CommonGettersTypes.GET_CREATE_FOLDER]: boolean;
};

export type GettersDefinition = {
  [P in keyof CommonGetters]: (state: CommonState, getters: CommonGetters) => CommonGetters[P];
}

const getters: GettersDefinition = {
  [CommonGettersTypes.GET_USER]: state => state.user,
  [CommonGettersTypes.GET_IS_AUTH]: state => state.isAuth,
  [CommonGettersTypes.GET_SHOW_FILE_MENU]: state => state.showFileMenu,
  [CommonGettersTypes.GET_CREATE_FOLDER]: state => state.showCreateFolder
};

export default getters;
