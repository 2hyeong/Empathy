import { useCallback, useState } from "react";
import { mutate } from "swr";

// const
import { personalities16 } from "storefront/constants/personality";

// ui
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  FormControl,
  TextField,
} from "ui";

import { AddIcon } from "ui/icons";

// idl
import { Friend } from "idl/gen/typescript-fetch";
// api
import { createFriend } from "storefront/services/useFriend";
// hooks
import useSnackbar from "storefront/hooks/useSnackbar";

export default function AddFriendDialog() {
  const { show: showSuccess, Snackbar: SuccessSnackbar } = useSnackbar({
    title: "친구가 등록되었습니다.",
    severity: "success",
    autoHideDuration: 3000,
  });
  const [isOpen, setIsOpen] = useState(false);

  const show = useCallback(() => setIsOpen(true), [setIsOpen]);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const joinData = {
      name: data.get("name"),
      personality: data.get("personality"),
    };

    const isInPersonality16 =
      personalities16.filter((p) => p.label === joinData.personality).length !==
      0;

    if (joinData.name === "" || !isInPersonality16) return;

    mutate("/api/users/friends", () => createFriend(joinData as Friend));

    showSuccess();
    close();
  };

  return (
    <>
      <Fab
        data-testid="add-friend-btn"
        sx={{ position: "absolute", bottom: "25px", right: "25px" }}
        onClick={show}
      >
        <AddIcon />
      </Fab>
      <Dialog open={isOpen} onClose={close} data-testid="add-friend-dialog">
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>친구 추가</DialogTitle>
          <FormControl fullWidth required variant="standard">
            <DialogContent>
              <DialogContentText>
                가입한 친구가 아니면 개인적으로 등록할 수 있어요. <br />
                친구의 이름과 성격유형을 작성해주세요.
              </DialogContentText>

              <TextField
                sx={{ marginY: 1 }}
                autoFocus
                fullWidth
                required
                name="name"
                label="이름"
                type="text"
                variant="standard"
                inputProps={{
                  "data-testid": "add-friend-name",
                }}
              />
              <Autocomplete
                id="personality"
                sx={{ marginY: 1 }}
                autoHighlight
                autoComplete
                options={personalities16}
                data-testid="add-friend-personality"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    label="성격유형"
                    name="personality"
                    type="text"
                    variant="standard"
                  />
                )}
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={close}>취소</Button>
              <Button
                type="submit"
                color="success"
                data-testid="add-friend-submit-btn"
              >
                추가
              </Button>
            </DialogActions>
          </FormControl>
        </Box>
      </Dialog>
      <SuccessSnackbar />
    </>
  );
}
