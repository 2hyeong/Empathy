import { getSession, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { signIn } from "next-auth/react";
import { cookies } from "next/headers";
// component
import MyPersonality from "storefront/components/personality/my-info/MyPersonality";
// api
import { BASE_PATH } from "idl/gen/typescript-fetch";
import { headers } from "next/headers";
// ----------------------------------------------------------------------

const getPersonality = async () => {
  const headersInstance = headers();
  const authorization = headersInstance.get("authorization");
  const resp = await fetch(`${BASE_PATH}/me`, {
    cache: "no-store",
  });

  const data = await resp.json();
  return data.personality;
};

export default async function Page() {
  const personality = await getPersonality();
  //   const { data: session, status } = useSession();

  //   if (status === "unauthenticated") {
  //     signIn("kakao");
  //   }

  return <MyPersonality personality={personality || ""} />;
}
