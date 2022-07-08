import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

console.log(process.env.GOOGLE_ID);
console.log(process.env.GOOGLE_SECRET);


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: '857657527726-fimo5s7tkqeljndu53vu33oomln230gf.apps.googleusercontent.com',
            clientSecret: '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',
        }),
        // ...add more providers here
    ],
})