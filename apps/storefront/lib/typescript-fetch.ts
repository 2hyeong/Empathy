import { Configuration, UsersApi } from "idl/gen/typescript-fetch";

export const configuration = new Configuration({
  basePath: `${window.location.origin}/api`,
});

export const usersApi = new UsersApi(configuration);
