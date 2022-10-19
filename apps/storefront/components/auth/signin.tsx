import { signIn } from "next-auth/react";
import { Box, Button } from "ui";

export default function SignIn() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Button
        size="small"
        variant="contained"
        sx={{ marginBottom: 1 }}
        onClick={() => signIn("kakao")}
      >
        카카오 로그인
      </Button>
      <Button
        size="small"
        variant="contained"
        color="info"
        onClick={() => signIn("naver")}
      >
        네이버 로그인
      </Button>
    </Box>
  );
}
