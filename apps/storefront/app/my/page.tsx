import { headers } from "next/headers";
// component
import MyPersonality from "storefront/components/personality/my-info/MyPersonality";
import AuthGuard from "storefront/features/auth/AuthGuard";
// idl
import { BASE_PATH } from "idl/gen/typescript-fetch";
// lib
import { defaultSsrOptions } from "storefront/lib/fetch";

// ----------------------------------------------------------------------

const getPersonality = async () => {
  const resp = await fetch(`${BASE_PATH}/me`, defaultSsrOptions(headers()));

  const data = await resp.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return data.personality;
};

// ----------------------------------------------------------------------

export default async function Page() {
  const personality = await getPersonality();

  return (
    <AuthGuard>
      <MyPersonality personality={personality || ""} />
    </AuthGuard>
  );
}
