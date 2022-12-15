import {
  Configuration,
  UsersApi,
  UserApi,
  FriendsApi,
  FriendApi,
  BASE_PATH,
} from "idl/gen/typescript-fetch";

const configuration = new Configuration({
  basePath: BASE_PATH,
});

export const usersApi = new UsersApi(configuration);
export const userApi = new UserApi(configuration);
export const friendsApi = new FriendsApi(configuration);
export const friendApi = new FriendApi(configuration);
