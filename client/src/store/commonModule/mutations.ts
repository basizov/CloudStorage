import { IUser } from "@/models/IUser";
import { MutationTree } from "vuex";
import { CommonState } from "./state";

export enum CommonMutationsTypes {
  SET_USER = 'setUser',
  SET_IS_AUTH = 'setIsAuth',
  SET_SHOW_FILE_MENU = 'setShowFileMenu',
  SET_CREATE_FOLDER = 'setShowCreateFolder'
};

export type CommonMutations<S = CommonState> = {
  [CommonMutationsTypes.SET_USER]: (state: S, user: IUser | null) => void;
  [CommonMutationsTypes.SET_IS_AUTH]: (state: S, isAuth: boolean) => void;
  [CommonMutationsTypes.SET_SHOW_FILE_MENU]: (state: S, showFileMenu: boolean) => void;
  [CommonMutationsTypes.SET_CREATE_FOLDER]: (state: S, showCreateFolder: boolean) => void;
};

const mutations: MutationTree<CommonState> & CommonMutations = {
  [CommonMutationsTypes.SET_USER]: (state: CommonState, user: IUser | null) => {
    state.user = user;
  },
  [CommonMutationsTypes.SET_IS_AUTH]: (state: CommonState, isAuth: boolean) => {
    state.isAuth = isAuth;
  },
  [CommonMutationsTypes.SET_SHOW_FILE_MENU]: (state: CommonState, showFileMenu: boolean) => {
    state.showFileMenu = showFileMenu;
  },
  [CommonMutationsTypes.SET_CREATE_FOLDER]: (state: CommonState, showCreateFolder: boolean) => {
    state.showCreateFolder = showCreateFolder;
  }
};

export default mutations;
