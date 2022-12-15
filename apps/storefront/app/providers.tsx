"use client";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
// ui
import ThemeProvider from "ui/theme";
import CssBaseline from "@mui/material/CssBaseline";
// component
import DashboardLayout from "storefront/components/layout/dashboard";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider refetchInterval={5 * 60}>
      <RecoilRoot>
        <ThemeProvider>
          <CssBaseline />
          <DashboardLayout>{children}</DashboardLayout>
        </ThemeProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}
