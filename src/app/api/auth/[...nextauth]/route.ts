import type { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";

const users = [
  {
    id: 1,
    name: "admin",
    password: "admin",
    email: "admin@gmail.com",
    role: "admin",
  },
  {
    id: 2,
    name: "user",
    password: "user",
    email: "user@gmail.com",
    role: "user",
  },
];

interface RequestInternal {
  body: Record<string, any>;
  query: Record<string, any>;
  headers: Record<string, any>;
  method: string;
}
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<User | null> {
        const user = users.find(
          (user) =>
            user.email === credentials?.email &&
            user.password === credentials?.password
        );

        if (user) {
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } else {
          throw new Error("Email or password is incorrect");
        }
      },
    }),
  ],
  pages: {
    signIn: "/signIn",
    signOut: "/signIn",
    error: "/signIn",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
