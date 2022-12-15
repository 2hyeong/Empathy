import { useState, useCallback } from "react";
// ui
import Alert from "@mui/material/Alert";
import MuiSnackbar from "@mui/material/Snackbar";

// ----------------------------------------------------------------------

type UseSnackbarProps = {
  title: string;
  severity?: any;
  autoHideDuration?: number;
};

function useSnackbar(props: UseSnackbarProps) {
  const { title, severity, autoHideDuration, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);

  const show = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  const Snackbar = () => (
    <MuiSnackbar
      {...rest}
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={autoHideDuration}
      sx={{ position: "fixed" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {title}
      </Alert>
    </MuiSnackbar>
  );

  return {
    show,
    isOpen,
    Snackbar,
  };
}

export default useSnackbar;
