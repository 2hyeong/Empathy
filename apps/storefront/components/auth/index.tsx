import { useSession } from "next-auth/react";

// component
import AccountPopover from "./AccountPopover";
import SignIn from "./SignIn";

// ----------------------------------------------------------------------

export default function Auth() {
  const { data: session } = useSession();
  const hasSession = !!session?.user?.id;

  return <>{hasSession ? <AccountPopover /> : <SignIn />}</>;
}
