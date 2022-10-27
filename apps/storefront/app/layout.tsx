"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider, theme, Box } from "ui";
import Appbar from "storefront/components/layout/appbar";
import Meta from "storefront/components/layout/meta";
import Sidebar from "storefront/components/layout/sidebar";
import { useState } from "react";

type PageProps = {
  children?: React.ReactNode;
  params?: any;
};

export default function RootLayout({ children, params }: PageProps) {
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
      </head>
      <body>
        <SessionProvider session={params.session} refetchInterval={5 * 60}>
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
