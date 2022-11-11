import MuiButton, { ButtonProps } from "@mui/material/Button";

export const Button = (props: ButtonProps) => {
  return <MuiButton {...props}>{props.children}</MuiButton>;
};
