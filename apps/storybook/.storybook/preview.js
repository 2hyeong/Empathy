import { SessionProvider } from "next-auth/react";
import "./index.css";

import ThemeProvider from "ui/theme";
import CssBaseline from "@mui/material/CssBaseline";

const withThemeProvider = (Story, context) => {
  return (
    <SessionProvider>
      <ThemeProvider>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export const decorators = [withThemeProvider];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
