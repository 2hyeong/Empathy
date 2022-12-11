"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// ui
import { Button, Dialog, DialogContent, DialogTitle, Typography } from "ui";

interface SignInModalProps {
  visible: boolean;
  show: () => void;
  close: () => void;
}

export default function SignInModal({
  visible,
  show,
  close,
}: SignInModalProps) {
  const router = useRouter();

  const handleClickKakaoLogin = () => {
    signIn("kakao");
    close();
  };

  const handleClickCancel = () => {
    router.replace("/");
    close();
  };

  return (
    <Dialog
      open={visible}
      onClose={close}
      aria-labelledby="로그인 모달"
      aria-describedby="소셜 로그인을 제공합니다"
    >
      <DialogTitle>
        <Typography variant="h6">소셜 로그인</Typography>
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        <Button onClick={handleClickKakaoLogin}>
          <Image
            src="/assets/images/social-login/kakao_login_large_wide.png"
            alt="카카오 로그인"
            width={250}
            height={40}
          />
        </Button>
        <Button onClick={handleClickCancel}>다음에 하기</Button>
      </DialogContent>
    </Dialog>
  );
}
