import {
  Friend,
  FriendToJSON,
  User,
  UserToJSON,
} from "idl/gen/typescript-fetch";
import { operations } from "storefront/../../packages/idl/gen";
import { usersApi, userApi, friendsApi } from "./typescript-fetch";

export const getUser = () =>
  <
    Promise<
      | operations["getUsers"]["responses"]["200"]["content"]["application/json"]
      | operations["getUsers"]["responses"]["default"]["content"]["application/json"]
    >
  >usersApi.getUsers();
export const getMe = () =>
  <
    Promise<
      | operations["getMe"]["responses"]["200"]["content"]["application/json"]
      | operations["getMe"]["responses"]["default"]["content"]["application/json"]
    >
  >userApi.getMe();

export const updateUser = (body: User) =>
  usersApi.updateUsers({ body: UserToJSON(body) });

export const getFriends = () => friendsApi.getFriends();
export const createFriend = (body: Friend) =>
  friendsApi.createFriend({ body: FriendToJSON(body) });
