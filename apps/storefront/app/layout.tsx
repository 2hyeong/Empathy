import { ReactNode } from "react";
// mock
import { startMock } from "storefront/mocks";
// component
import Meta from "storefront/components/layout/meta";
import Providers from "./providers";

interface PageProps {
  children?: ReactNode;
}

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  startMock();
}

export default function RootLayout({ children }: PageProps) {
  return (
    <html>
      <head>
        <Meta
          props={{
            title: "공감해",
            description: "성격유형을 확인하고 저장해서 친구들과 공유해요",
            ogUrl: "",
            ogImage: "",
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
