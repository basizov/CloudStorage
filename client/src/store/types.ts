import { Modules } from ".";
import { CommonActions } from "./commonModule/actions";
import { FileActions } from "./fileModule/actions";

export const AllActions = {
  ...CommonActions,
  GET_FILES: `${Modules.FILE_MODULE}/${FileActions.GET_FILES}`
};
