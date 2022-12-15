// component
import MyPersonality from "storefront/components/personality/my-info/MyPersonality";
import AuthGuard from "storefront/features/auth/AuthGuard";

// ----------------------------------------------------------------------

export default async function Page() {
  return (
    <AuthGuard>
      <MyPersonality />
    </AuthGuard>
  );
}
