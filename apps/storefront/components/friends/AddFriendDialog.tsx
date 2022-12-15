import { mutate } from "swr";
// const
import { mbtiResults } from "storefront/constants/mbtiResults";
// ui
import Autocomplete from "@mui/material/Autocomplete";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// idl
import { Friend } from "idl/gen/typescript-fetch";
// api
import { createFriend } from "storefront/services/useFriend";
// hook
import useSnackbar from "storefront/hooks/useSnackbar";
import { useForm } from "react-hook-form";

interface AddFriendDialogProps {
  visible: boolean;
  close: () => void;
}

export default function AddFriendDialog({
  visible,
  close,
}: AddFriendDialogProps) {
  const { register, handleSubmit } = useForm();
  const { show: showSuccess, Snackbar: SuccessSnackbar } = useSnackbar({
    title: "친구가 등록되었습니다.",
    severity: "success",
    autoHideDuration: 3000,
  });

  const onSubmit = (data: any) => {
    const isInPersonality16: boolean = !!mbtiResults.find(
      (p) => p.label === data.personality
    );
    console.log("hihi2", isInPersonality16);

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
              />
              <Autocomplete
                sx={{ marginY: 1 }}
                autoHighlight
                autoComplete
                options={mbtiResults}
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
              <Button
                variant="outlined"
                size="small"
                onClick={close}
                aria-label="취소"
              >
                취소
              </Button>
              <Button
                type="submit"
                size="small"
                variant="contained"
                aria-label="친구추가"
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
