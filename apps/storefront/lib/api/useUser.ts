import {
  Friend,
  FriendToJSON,
  User,
  UserToJSON,
} from "idl/gen/typescript-fetch";
import { usersApi, userApi, friendsApi } from "./typescript-fetch";

export const getUser = () => usersApi.getUsers();
export const getMe = () => userApi.getMe();
export const updateUser = (body: User) =>
  usersApi.updateUsers({ body: UserToJSON(body) });

export const createFriend = (body: Friend) =>
  friendsApi.createFriend({ body: FriendToJSON(body) });
