import React from "react";
import { Box } from "ui";
import Appbar from "storefront/components/layout/appbar";
import Sidebar from "storefront/components/layout/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarWidth, setSidebarWidth] = React.useState(384);
  return (
    <Box>
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
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
