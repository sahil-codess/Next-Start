import NextAuth from "next-auth/next";
import Providers from "next-auth/providers";

export default NextAuth({
    Providers: [
        Providers.Github({
            clientId: '',
            clientSecret: '',
        }),
    ],
}) 