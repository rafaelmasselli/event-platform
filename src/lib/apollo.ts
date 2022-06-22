import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4op6z8e0jte01xnhnxdccv0/master",
  cache: new InMemoryCache(),
});
