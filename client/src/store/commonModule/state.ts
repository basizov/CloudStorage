import { IUser } from "@/models/IUser";

export type CommonState = {
  user: IUser | null;
};

const state: CommonState = {
  user: null
};

export default state;
