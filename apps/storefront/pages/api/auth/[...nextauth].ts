import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import {
  db,
  firebaseClientConfig,
  kakaoConfig,
  naverConfig,
  userConverter,
} from "scripts";

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
        const {
          kakao_account: { gender, birthday, age_range: ageRange },
        } = profile;

        await updateKakaoProfile({
          userId: user.id,
          gender,
          birthday,
          ageRange,
        });
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

const updateKakaoProfile = async ({ userId, gender, birthday, ageRange }) => {
  const body = {};

  const userData = await db.get("users").where(userId, userConverter);
  if (!userData.gender) body.gender = gender;
  if (!userData.birthday) body.birthday = birthday;
  if (!userData.ageRange) body.ageRange = ageRange;

  await db.update("users", body).where(userId);
};
