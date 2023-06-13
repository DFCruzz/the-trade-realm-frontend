import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(`${process.env.APP_API_URL}/signin`, credentials, {
            headers: { "Content-Type": "application/json" }
          });
          const user = res.data;
          if (res.status === 200 && user) {
            return user;
          }
        } catch (error) {
          console.error(error);
        }
        return null;
      }
    })
  ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }