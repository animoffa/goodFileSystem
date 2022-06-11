import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import file, { FileState } from "./file";
export type GlobalState = {
  count: number;
};

export type FullState = {
  file: FileState;
} & GlobalState;

const globalStore = {
  state: {
    count: 0,
  },
  modules: {
    file,
  },
};

export const key: InjectionKey<Store<FullState>> = Symbol();

export const store = createStore<GlobalState>(globalStore);
