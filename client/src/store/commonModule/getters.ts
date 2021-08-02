import { IUser } from "@/models/IUser";
import { CommonState } from "./state";

export enum CommonGettersTypes {
  GET_USER = 'getUser'
};

export interface CommonGetters {
  [CommonGettersTypes.GET_USER]: IUser | null;
};

export type GettersDefinition = {
  [P in keyof CommonGetters]: (state: CommonState, getters: CommonGetters) => CommonGetters[P];
}

const getters: GettersDefinition = {
  [CommonGettersTypes.GET_USER]: state => state.user
};

export default getters;
