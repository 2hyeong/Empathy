// ----------------------------------------------------------------------
export type { DialogProps } from "@mui/material/Dialog";
export type { ButtonProps } from "@mui/material/Button";
export type { SxProps } from "@mui/material/styles";
export type { SnackbarProps } from "@mui/material/Snackbar";
export type { CardProps } from "@mui/material/Card";

import type {
  Theme as MUITheme,
  ThemeOptions as MUIThemeOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme extends MuiTheme {
    customShadows: { [key: string]: string };
  }
  interface ThemeOptions extends MUIThemeOptions {
    customShadows?: { [key: string]: string };
  }
}

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
  }
}
