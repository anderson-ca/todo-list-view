import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "13c2bfdedb1958dd3468",
      clientSecret: "a9e85c9fa8cc9492b7cc4ac500ff8e6ddc60b9e2",
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
