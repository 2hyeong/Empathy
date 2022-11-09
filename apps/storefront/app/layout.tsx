"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider, theme, Box } from "ui";
import Appbar from "storefront/components/layout/appbar";
import Meta from "storefront/components/layout/meta";
import Sidebar from "storefront/components/layout/sidebar";
import { useState } from "react";
import { startMock } from "storefront/mocks";

type PageProps = {
  children?: React.ReactNode;
  params?: any;
};

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  startMock();
}

export default function RootLayout({ children }: PageProps) {
  const [sidebarWidth, setSidebarWidth] = useState(384);
  return (
    <html>
      <head>
        <Meta
          props={{
            title: "",
            description: "",
            ogUrl: "",
            ogImage: "",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poor+Story&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SessionProvider refetchInterval={5 * 60}>
          <ThemeProvider theme={theme}>
            <Box component="aside">
              <Sidebar width={sidebarWidth} />
            </Box>

            <Box component="nav">
              <Appbar sidebarWidth={sidebarWidth} />
            </Box>

            <Box
              component="main"
              sx={{
                marginLeft: `${sidebarWidth}px`,
                padding: 2,
              }}
            >
              {children}
            </Box>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
