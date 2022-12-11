// hook
import { useModal } from "storefront/hooks/useModal";
// ui
import { Button } from "ui";
// component
import SignInModal from "./SignInModal";

export default function SignIn() {
  const { visible, show, close } = useModal({ defaultVisible: false });

  return (
    <>
      <Button onClick={show}>로그인</Button>
      <SignInModal visible={visible} show={show} close={close} />
    </>
  );
}
