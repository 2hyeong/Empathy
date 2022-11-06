import { useCallback, useState } from "react";
import { personalities16 } from "storefront/constants/personality";
import {
  AddIcon,
  AutoComplete,
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
import { createFriend } from "storefront/lib/api/useUser";
import { mutate } from "swr";
import useSnackbar from "storefront/lib/hooks/useSnackbar";
import { Friend } from "idl/gen/typescript-fetch";

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

    const joinData: Friend = {
      name: data.get("name") as Friend["name"],
      personality: data.get("personality") as Friend["personality"],
    };

    if (joinData.name === "" || joinData.personality === "") return;

    mutate("/api/users/friends", createFriend(joinData));

    showSuccess();
    close();
  };

  return (
    <>
      <Fab
        sx={{ position: "absolute", bottom: "25px", right: "25px" }}
        onClick={() => show()}
      >
        <AddIcon />
      </Fab>
      <Dialog open={isOpen} onClose={close}>
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
              />
              <AutoComplete
                id="personality"
                sx={{ marginY: 1 }}
                autoHighlight
                autoComplete
                options={personalities16}
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
              <Button type="submit" color="success">
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
