import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import file, { FileState, FileSystem } from "./file";
export type GlobalState = {
  count: number;
  isPopupOpen: boolean;
  currentFileSystemID: string;
};

export type FullState = {
  file: FileState;
  fileSystems: FileSystem;
} & GlobalState;

const globalStore = {
  state: {
    count: 0,
    currentFileSystemID: "",
    isPopupOpen: false,
  },
  mutations: {
    changeCurrentFileSystemID(state: GlobalState, res: string) {
      state.currentFileSystemID = res;
    },
    changePopupOpened(state: GlobalState) {
      state.isPopupOpen =  !state.isPopupOpen;
    }
  },
  modules: {
    file,
  },
};

export const key: InjectionKey<Store<FullState>> = Symbol();

export const store = createStore<GlobalState>(globalStore);
