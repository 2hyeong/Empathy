import "./index.css";

import Providers from "storefront/app/providers";
import Container from "@mui/material/Container";

const withProvider = (Story, context) => {
  return (
    <Providers>
      <Container sx={{ pt: 4 }}>
        <Story {...context} />
      </Container>
    </Providers>
  );
};

export const decorators = [withProvider];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
