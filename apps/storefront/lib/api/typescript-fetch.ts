import {
  Configuration,
  UsersApi,
  UserApi,
  FriendsApi,
} from "idl/gen/typescript-fetch";

const configuration = new Configuration({
  basePath: `http://localhost:3000/api`,
});

export const usersApi = new UsersApi(configuration);
export const userApi = new UserApi(configuration);
export const friendsApi = new FriendsApi(configuration);
