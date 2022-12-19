/* eslint-disable import/no-anonymous-default-export */
export const useRouter = () => ({
  route: "/",
  pathname: "",
  query: "",
  asPath: "",
  prefetch: () => {},
  push: () => {},
  replace: () => {},
});

export const usePathname = () => ({
  pathname: "",
});

export default {
  useRouter,
  usePathname,
};
