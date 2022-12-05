"use client";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

// ui
import ThemeProvider from "ui/theme";
import { Box, CssBaseline, Tab, Tabs } from "ui";
import Meta from "storefront/components/layout/meta";
import Sidebar from "storefront/components/layout/sidebar";
import { ReactNode, useState } from "react";
// mock
import { startMock } from "storefront/mocks";
// components
import Bingo from "storefront/components/personality/bingo";
import MyPersonality from "storefront/components/personality/my-personality";
import DashboardLayout from "storefront/components/layout/dashboard";
// idl
import { getMe } from "storefront/lib/api/useUser";
import { User } from "idl/gen/typescript-fetch";

// import dynamic from "next/dynamic";
// const Appbar = dynamic(() => import("storefront/components/layout/appbar"));

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ display: "flex", justifyContent: "center" }}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export interface PageProps {
  children?: React.ReactNode;
}

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  startMock();
}

export default function RootLayout({ children }: PageProps) {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const [value, setValue] = useState(0);
  const { data: me, error } = useSWR<User, Error>("api/me", getMe);

  const tabs = [
    {
      index: 0,
      key: "tab-personality",
      label: "내 성격유형",
      show: me?.personality && !slug,
      render: () => <MyPersonality />,
    },
    {
      index: 1,
      key: "tab-bingo",
      label: "빙고",
      show: true,
      render: () => <Bingo />,
    },
    {
      index: 2,
      key: "tab-relationship",
      label: "궁합",
      show: true,
      render: () => <></>,
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        <SessionProvider refetchInterval={5 * 60}>
          <ThemeProvider>
            <CssBaseline />
            <DashboardLayout>
              {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs value={value} onChange={handleChange}>
                    {tabs.map((tab, index) => {
                      return (
                        tab.show && (
                          <Tab
                            key={tab.key}
                            label={tab.label}
                            {...a11yProps(index)}
                          />
                        )
                      );
                    })}
                  </Tabs>
                  {tabs.map((tab, index) => {
                    return (
                      tab.show && (
                        <TabPanel key={tab.key} value={value} index={index}>
                          <tab.render />
                        </TabPanel>
                      )
                    );
                  })}
                </Box> */}
              {children}
            </DashboardLayout>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
