import { headers } from "next/headers";
// idl
import { BASE_PATH } from "idl/gen/typescript-fetch";
// lib
import { defaultSsrOptions } from "storefront/lib/fetch";
// component
import MyPersonality from "storefront/components/personality/my-info/MyPersonality";
import AuthGuard from "storefront/features/auth/AuthGuard";
// type
import type { IMbtiResult } from "storefront/components/personality/types/personality";

// ----------------------------------------------------------------------

const getPersonality = async () => {
  const resp = await fetch(`${BASE_PATH}/me`, defaultSsrOptions(headers()));

  if (resp.status === 204) {
    return {
      notFound: true,
    };
  }

  const data = await resp.json();

  return data?.personality || "";
};

// ----------------------------------------------------------------------

export default async function Page() {
  const personality: IMbtiResult["label"] = await getPersonality();

  return (
    <AuthGuard>
      <MyPersonality personality={personality} />
    </AuthGuard>
  );
}
