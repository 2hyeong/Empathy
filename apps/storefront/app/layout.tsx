// mock
import { startMock } from "storefront/mocks";
// component
import Meta from "storefront/components/layout/meta";
import Providers from "./providers";

interface PageProps {
  children?: React.ReactNode;
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
            title: "",
            description: "",
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
