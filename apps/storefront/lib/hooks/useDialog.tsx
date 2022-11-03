import { useCallback, useState } from "react";
import {
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from "ui";

interface UseDialogProps {
  title: string;
  content: JSX.Element;
  actions: JSX.Element;
}

function useDialog(props: UseDialogProps & DialogProps) {
  const { title, content, actions, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);

  const show = useCallback(() => setIsOpen(true), [setIsOpen]);
  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  const Dialog = () => (
    <MuiDialog {...rest} open={isOpen} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </MuiDialog>
  );

  return {
    show,
    Dialog,
  };
}

export default useDialog;
