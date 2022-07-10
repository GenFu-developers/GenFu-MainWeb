import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
// @ts-ignore
import clientPromise from '../../../lib/mongodb'


export default NextAuth({
    // @ts-ignore
    adapter: MongoDBAdapter(clientPromise),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,

            from: process.env.EMAIL_FROM,
        }),
    ],
})