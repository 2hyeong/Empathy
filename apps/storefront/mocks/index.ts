export const startMock = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    (async () => {
      const { server } = await import("storefront/mocks/server");
      server.listen();
    })();
  } else {
    (async () => {
      const { worker } = await import("storefront/mocks/browser");
      worker.start();
    })();
  }
};
