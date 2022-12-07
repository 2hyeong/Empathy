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
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface AddFriendDialogProps {
  visible: boolean;
  close: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}

export default function AddFriendDialog({
  visible,
  close,
  register,
  handleSubmit,
}: AddFriendDialogProps) {
  const { show: showSuccess, Snackbar: SuccessSnackbar } = useSnackbar({
    title: "친구가 등록되었습니다.",
    severity: "success",
    autoHideDuration: 3000,
  });

  const onSubmit = (data: any) => {
    const isInPersonality16 =
      personalities16.filter((p) => p.label === data.personality).length !== 0;

    if (data.name === "" || !isInPersonality16) return;

    mutate("/api/users/friends", () => createFriend(data as Friend));

    showSuccess();
    close();
  };

  return (
    <>
      <Dialog open={visible} onClose={close} data-testid="add-friend-dialog">
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>친구 추가</DialogTitle>
          <FormControl fullWidth required>
            <DialogContent>
              <DialogContentText>
                가입한 친구가 아니면 개인적으로 등록할 수 있어요. <br />
                친구의 이름과 성격유형을 작성해주세요.
              </DialogContentText>

              <TextField
                sx={{ marginY: 1 }}
                autoFocus
                required
                fullWidth
                size="small"
                label="이름"
                {...register("name")}
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
                    size="small"
                    label="성격유형"
                    {...register("personality")}
                  />
                )}
              />
            </DialogContent>

            <DialogActions>
              <Button variant="outlined" size="small" onClick={close}>
                취소
              </Button>
              <Button
                type="submit"
                size="small"
                variant="contained"
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
