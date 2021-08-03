import { IUser } from "@/models/IUser";

export type CommonState = {
  user: IUser | null;
  isAuth: boolean;
};

const state: CommonState = {
  user: null,
  isAuth: false
};

export default state;
