import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, theme } from "ui";

export default function Empathy({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
