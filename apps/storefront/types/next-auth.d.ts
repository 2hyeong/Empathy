import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      name: string;
      image: string;
      gender: string;
      birthday: string;
      ageRange: string;
    };
  }
  interface User {
    id: string;
    name: string;
    image: string;
    gender?: string;
    birthday?: string;
    ageRange?: string;
  }
  interface Profile {
    kakao_account: {
      gender: string;
      birthday: string;
      age_range: string;
    };
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    user: User;
  }
}
