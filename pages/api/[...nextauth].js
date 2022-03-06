import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: '694e2a84097f8b56f27c',
            clientSecret: 'bfafbf91f1d75680991046f34387f7ba8dfeebe3',
        }),
        // ...add more providers here
    ],
})