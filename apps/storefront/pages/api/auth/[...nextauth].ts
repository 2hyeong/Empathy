import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { firebaseClientConfig, kakaoConfig, naverConfig } from "scripts";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    NaverProvider(naverConfig),
    KakaoProvider({
      ...kakaoConfig,
      authorization: {
        params: {
          scope:
            "talk_message, age_range, gender, friends, birthday, account_email",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "kakao") {
        user.gender = profile?.kakao_account.gender;
        user.birthday = profile?.kakao_account.birthday;
        user.ageRange = profile?.kakao_account.age_range;
      }
      return true;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      account && (token.account = account);
      user && (token.user = user);
      return token;
    },
    async session({ session, user, token }) {
      session = {
        ...session,
        user: {
          id: token?.user?.id,
          ...token?.user,
        },
      };
      return session;
    },
  },
  adapter: FirestoreAdapter(firebaseClientConfig),
  debug: process.env.NODE_ENV === "development",
});
