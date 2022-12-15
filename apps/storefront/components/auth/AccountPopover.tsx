import { MouseEvent, useState } from "react";
import { useSession, signOut } from "next-auth/react";
// ui
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";

// mocks_
import account from "storefront/mocks/_mock/account";
import { ClickAwayListener } from "@mui/material";

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const { data: session } = useSession<boolean>();

  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleLogout = (): void => {
    signOut();
    setOpen(null);
  };

  const handleClose = (): void => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open
            ? {
                "&:before": {
                  zIndex: 1,
                  content: "''",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  position: "absolute",
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                },
              }
            : {}),
        }}
      >
        <Avatar src={session?.user.image || account.photoURL} alt="photoURL" />
      </IconButton>

      <ClickAwayListener onClickAway={handleClose}>
        <Popover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              p: 0,
              mt: 1.5,
              ml: 0.75,
              width: 180,
              "& .MuiMenuItem-root": {
                typography: "body2",
                borderRadius: 0.75,
              },
            },
          }}
        >
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="subtitle2" noWrap>
              {session?.user.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
              {session?.user.email}
            </Typography>
          </Box>

          {/* <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack> */}

          <Divider sx={{ borderStyle: "dashed" }} />

          <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
            로그아웃
          </MenuItem>
        </Popover>
      </ClickAwayListener>
    </>
  );
}
