import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

export default new ApolloClient({
  link: new HttpLink({ uri: "http://192.168.1.78:8080/graphql" }),
  cache: new InMemoryCache(),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  fetchOptions: {
    mode: "no-cors",
  },
});
