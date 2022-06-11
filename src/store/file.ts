import { Module } from "vuex";
import { GlobalState } from "./";
import gql from "graphql-tag";
import graphqlClient from "../utils/graphql";

export interface FileState {
  files: File[];
}

export interface File {
  id: number;
  type: Type;
  name: string;
}

enum Type {
  "file",
  "folder",
}

const files = [
  {
    id: 1,
    type: "folder",
    name: "table1",
  },
];

const file: Module<FileState, GlobalState> = {
  state: (): FileState => ({ files: [] }),
  mutations: {
    setFiles(state: FileState, files) {
      state.files = files;
    },
  },
  actions: {
    async fetchFile({ commit }, id) {
      const response = await graphqlClient.query({
        query: gql`
          query File($fileId: ID!) {
            file(id: $fileId) {
              id
              name
            }
          }
        `,
        variables: { fileId: id },
      });

      console.log(response);
      commit("setFiles", response.data);
    },
  },
  getters: {},
};
export default file;
