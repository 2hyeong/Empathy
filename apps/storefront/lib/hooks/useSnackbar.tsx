import { useState, useCallback } from "react";
import { Alert, Snackbar as MuiSnackbar } from "ui";

interface UseSnackbarProps {
  title: string;
  severity?: any;
  autoHideDuration?: number;
}

function useSnackbar(props: UseSnackbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const show = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const Snackbar = () => (
    <MuiSnackbar {...props} open={isOpen} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={props.severity}
        sx={{ width: "100%" }}
      >
        {props.title}
      </Alert>
    </MuiSnackbar>
  );

  return {
    show,
    Snackbar,
  };
}

export default useSnackbar;
