import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, theme } from "ui";
import { Session } from "next-auth";

export default function Empathy({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
