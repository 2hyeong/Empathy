import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { firebaseConfig, kakaoConfig, naverConfig } from "scripts";
import { db } from "scripts/src/firebase-admin";

const adapter = !db ? FirestoreAdapter(firebaseConfig) : undefined;

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
  adapter: adapter,
  debug: process.env.NODE_ENV === "development",
});
