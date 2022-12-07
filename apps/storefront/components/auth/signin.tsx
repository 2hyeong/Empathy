import { signIn } from "next-auth/react";
import { Button } from "ui";

export default function SignIn() {
  return <Button onClick={() => signIn("kakao")}>카카오 로그인</Button>;
}
