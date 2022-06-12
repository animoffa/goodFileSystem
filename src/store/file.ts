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
    setFiles(state: FileState, res) {
      state.fileSystems = res;
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

      console.log(response);
      commit("setFiles", response.data.fileSystems);
      return response.data.fileSystems;
    },
    // async fetchFile({ commit }, id) {
    //   const response = await graphqlClient.query({
    //     query: gql`
    //       query FileSystems($fileId: ID!) {
    //         fileSystems(id: $fileId) {
    //           id
    //           name
    //         }
    //       }
    //     `,
    //     variables: { fileId: id },
    //   });

    //   console.log(response);
    //   commit("setFiles", response.data);
    // },
  },
  getters: {},
};
export default file;
