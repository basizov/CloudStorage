import { createStore, Store as VuexStore } from "vuex";
import commonModule, { CommonModule } from "./commonModule";
import { CommonState } from "./commonModule/state";

const store: VuexStore<CommonState> = createStore(commonModule);

enum Modules {
  COMMON_MODULE = 'commonModule',
};

type StoreModules = {
  [Modules.COMMON_MODULE]: CommonModule;
};

export type Store = CommonModule<Pick<StoreModules, Modules.COMMON_MODULE>>;

export default store;
