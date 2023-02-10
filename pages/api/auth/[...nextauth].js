import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "ae0c8525c1d4d3ff135b",
      clientSecret: "e92cd54b2ba4f2d6b0f9774a2efb6091ae88164b",
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
