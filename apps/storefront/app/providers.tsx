"use client";
import { ReactNode, useState } from "react";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { useServerInsertedHTML } from "next/navigation";
// @emotion
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
// ui
import ThemeProvider from "ui/theme";
import CssBaseline from "@mui/material/CssBaseline";
// component
import DashboardLayout from "storefront/components/layout/dashboard";

export default function Providers({ children }: { children: ReactNode }) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "css" });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <ThemeProvider>
        <SessionProvider refetchInterval={5 * 60}>
          <RecoilRoot>
            <CssBaseline />
            <DashboardLayout>{children}</DashboardLayout>
          </RecoilRoot>
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
