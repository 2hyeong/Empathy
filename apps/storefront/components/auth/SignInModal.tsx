"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// ui
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

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
      data-testid="signin-modal"
      open={visible}
      onClose={close}
      aria-labelledby="로그인 모달"
      aria-describedby="소셜 로그인을 제공합니다"
      PaperProps={{
        sx: {
          padding: "1rem",
        },
      }}
    >
      <Typography variant="h6">소셜 로그인</Typography>
      <Typography variant="caption">
        로그인이 필요한 메뉴입니다. 로그인 후 이용해주세요.
      </Typography>
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
