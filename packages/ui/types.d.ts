// ----------------------------------------------------------------------
import type { DialogProps } from "@mui/material/Dialog";
import type { ButtonProps } from "@mui/material/Button";
import type { SxProps } from "@mui/material/styles";
import type { Theme } from "../types";
import type { SnackbarProps } from "@mui/material/Snackbar";

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

export { DialogProps, ButtonProps, SxProps, Theme, SnackbarProps };
