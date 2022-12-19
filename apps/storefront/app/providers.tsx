"use client";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
// ui
import ThemeProvider from "ui/theme";
import CssBaseline from "@mui/material/CssBaseline";
//

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider refetchInterval={5 * 60}>
      <RecoilRoot>
        <ThemeProvider>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}
