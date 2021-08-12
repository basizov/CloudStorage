import { IUser } from "@/models/IUser";

export type CommonState = {
  user: IUser | null;
  isAuth: boolean;
  showFileMenu: boolean;
  showCreateFolder: boolean;
};

const state: CommonState = {
  user: null,
  isAuth: false,
  showFileMenu: false,
  showCreateFolder: false
};

export default state;
