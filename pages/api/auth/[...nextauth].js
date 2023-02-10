import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "13c2bfdedb1958dd3468",
      clientSecret: "d90cc5764e66325b61c2259114244308b399686c",
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
