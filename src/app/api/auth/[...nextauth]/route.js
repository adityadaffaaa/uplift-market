import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { useAuth } from "@/app/hooks/user/auth";
import { useAuth as useAuthVendor } from "@/app/hooks/vendor/auth";
import { cookies } from "next/headers";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "user",
      name: "user",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { login } = useAuth();

        const { email, password } = credentials;

        if (!email || !password) {
          cookies().set("resMessage", "Login failed!");
          return null;
        }

        try {
          const res = await login({
            email,
            password,
          });

          if (res.status === 200) {
            const user = res.data;
            const resMessage = user.message;
            cookies().set("resMessage", resMessage);

            const finalResult = {
              ...user,
              role: "user",
            };
            return finalResult;
          }
        } catch (error) {
          console.error("Login failed!", error);
          return null;
        }
      },
    }),
    CredentialsProvider({
      id: "vendor",
      name: "vendor",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { loginVendor } = useAuthVendor();

        const { email, password } = credentials;

        if (!email || !password) {
          cookies().set("resMessage", "Login failed!");
          return null;
        }

        try {
          const res = await loginVendor({
            email,
            password,
          });
          if (res.status === 200) {
            const user = res.data;
            const resMessage = res.data.message;
            cookies().set("resMessage", resMessage);
            const finalResult = {
              ...user,
              role: "vendor",
            };
            return finalResult;
          }
        } catch (error) {
          console.error("Login failed!");
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      console.log(account);
      if (account.provider === "google") {
        return (
          profile.email_verified &&
          profile.email.endsWith("@gmail.com")
        );
      }
      return true;
    },
    async jwt({ user, token, account }) {
      console.log(user);
      console.log(account);
      if (user) {
        token.user = user.data;
        token.user.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session && token) {
        session.user = token.user;
      } else {
        console.error(
          "Session or token is undefined:",
          session,
          token
        );
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
