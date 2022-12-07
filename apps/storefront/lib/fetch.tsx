export const defaultFetchHeader = (headers: Headers) => ({
  headers: {
    cookie: headers.get("cookie") ?? "",
  },
});

export const defaultSsrOptions = (headers: Headers): RequestInit => ({
  cache: "no-store",
  ...defaultFetchHeader(headers),
});
