import useSWR from "swr";
// hook
import { getMe } from "storefront/services/useUser";
// component
import AccountPopover from "./AccountPopover";
import SignIn from "./SignIn";

// ----------------------------------------------------------------------

export default function Auth() {
  const { data: me } = useSWR("api/me", getMe);
  const isLogin: boolean = !!me?.name;

  return <>{isLogin ? <AccountPopover /> : <SignIn />}</>;
}
