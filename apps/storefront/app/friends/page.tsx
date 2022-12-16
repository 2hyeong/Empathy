// component
import FriendList from "storefront/components/friends/FriendList";
import AuthGuard from "storefront/features/auth/AuthGuard";

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <AuthGuard>
      <FriendList />
    </AuthGuard>
  );
}
