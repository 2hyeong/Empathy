"use client";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
// ui
import ThemeProvider from "ui/theme";
import { CssBaseline } from "ui";
// component
const DashboardLayout = dynamic(
  () => import("storefront/components/layout/dashboard"),
  { ssr: false }
);
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider refetchInterval={5 * 60}>
      <ThemeProvider>
        <CssBaseline />
        <DashboardLayout>{children}</DashboardLayout>
      </ThemeProvider>
    </SessionProvider>
  );
}
