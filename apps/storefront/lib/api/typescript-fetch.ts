import { Configuration, UsersApi, UserApi } from "idl/gen/typescript-fetch";

const configuration = new Configuration({
  basePath: `http://localhost:3000/api`,
});

export const usersApi = new UsersApi(configuration);
export const userApi = new UserApi(configuration);
