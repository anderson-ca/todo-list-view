import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "ae0c8525c1d4d3ff135b",
      clientSecret: "bac98f6251169a8f314829f4ecd2170aa88c973c",
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
