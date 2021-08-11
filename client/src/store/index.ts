import { createStore, Store as VuexStore } from "vuex";
import commonModule, { CommonModule } from "./commonModule";
import { CommonState } from "./commonModule/state";
import { FileModule } from "./fileModule";

const store = createStore<CommonState>(commonModule);

export enum Modules {
  COMMON_MODULE = 'commonModule',
  FILE_MODULE = 'fileModule',
};

type StoreModules = {
  [Modules.COMMON_MODULE]: CommonModule;
  [Modules.FILE_MODULE]: FileModule;
};

export type Store =
  CommonModule<Pick<StoreModules, Modules.COMMON_MODULE>> &
  FileModule<Pick<StoreModules, Modules.FILE_MODULE>>;

export default store;
