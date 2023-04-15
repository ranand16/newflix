import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prisma from "@/app/libs/prismaDb";
import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const adapter = PrismaAdapter(prisma);
const _linkAccount = adapter.linkAccount;
adapter.linkAccount = (account) => {
  const { "not-before-policy": _, refresh_expires_in, ...data } = account;
  return _linkAccount(data);
};
const authOption: AuthOptions = {
  adapter: adapter,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials!");
        }
        const user = await prisma?.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid Credentials");
        }

        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isCorrectPassword) {
          throw new Error("Invalid Credentials!");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  // jwt: {
  //   secret: process.env.NEXTAUTH_JWT_SECRET,
  // },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOption);
