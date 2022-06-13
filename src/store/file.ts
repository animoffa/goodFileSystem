import { Module } from "vuex";
import { GlobalState } from "./";
import gql from "graphql-tag";
import graphqlClient from "../utils/graphql";

export interface FileState {
  files: File[];
  fileSystems: FileSystem[];
}

export interface File {
  id: string;
  type: Type;
  name: string;
}

export interface FileSystem {
  id: string;
  name: string;
}

enum Type {
  "file",
  "folder",
}

const file: Module<FileState, GlobalState> = {
  state: (): FileState => ({ files: [], fileSystems: [] }),
  mutations: {
    setFileSystems(state: FileState, res) {
      state.fileSystems = res;
    },
    setFiles(state: FileState, res) {
      state.files = res;
    },
  },
  actions: {
    async fetchFileSystems({ commit }) {
      const response = await graphqlClient.query({
        query: gql`
          query FileSystems {
            fileSystems {
              id
              name
            }
          }
        `,
      });

      commit("setFileSystems", response.data.fileSystems);
      return response.data.fileSystems;
    },
    
    async fetchFiles({ commit }, id: string) {
      const response = await graphqlClient.query({
        query: gql`
          query Files($fsId: ID!) {
            files(fsId: $fsId) {
              id
              name
              type
            }
          }
        `,
        variables: { fsId: id },
      });

      console.log(response, 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
      commit("setFiles", response.data.files);
    },
  },
  getters: {},
};
export default file;
