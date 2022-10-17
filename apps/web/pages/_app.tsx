import { AppProps } from "next/app";
import { ThemeProvider, theme } from "ui";

export default function Empathy({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
