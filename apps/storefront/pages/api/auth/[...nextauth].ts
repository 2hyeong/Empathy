import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { firebaseAdminConfig, kakaoConfig, naverConfig } from "scripts";

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
  callbacks: {
    async session({ session, user }) {
      session = {
        ...session,
        user: {
          ...{ id: user.id },
          ...session.user,
        },
      };
      return session;
    },
  },
  adapter: FirestoreAdapter(firebaseAdminConfig),
  debug: process.env.NODE_ENV === "development",
});
