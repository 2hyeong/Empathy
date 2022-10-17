import { Avatar, Box, Button, CheckCircleIcon, Typography } from "ui";

interface AppbarProps {
  sidebarWidth: number | string;
}

export default function Appbar({ sidebarWidth }: AppbarProps) {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(90deg, #c7d2fe 25%, #fecaca 40%)",
        }}
        height={200}
      >
        <Box sx={{ padding: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button size="small" variant="contained" color="info">
            카카오 로그인
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: -8,
          paddingX: 4,
          marginLeft: `${sidebarWidth}px`,
        }}
      >
        <Avatar sx={{ width: 128, height: 128 }}>아바타</Avatar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 8,
            paddingX: 2,
          }}
        >
          <Typography variant="h5">홍길동</Typography>
          <CheckCircleIcon sx={{ marginLeft: 1 }} />
        </Box>
      </Box>
    </>
  );
}
