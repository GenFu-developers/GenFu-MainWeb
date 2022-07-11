import NextAuth, { Session } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
// @ts-ignore
import clientPromise from '../../../lib/mongoDB/mongodbPromise'
import DiscordProvider from 'next-auth/providers/discord'

export default NextAuth({
    // @ts-ignore
    adapter: MongoDBAdapter(clientPromise),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID || '',
            clientSecret: process.env.DISCORD_CLIENT_SECRET || ''
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (!user?.role) {
                user.role = "customer";
                user.banned = false;
            }
            return true;
        },
        async session({ session, token, user }) {
            // @ts-ignore
            session.user.role = user.role; // Add role value to user object so it is passed along with session
            return session;
        },
    },
})