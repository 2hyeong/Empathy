import { User, UserToJSON } from "idl/gen/typescript-fetch";
import { usersApi, userApi } from "./typescriptFetch";

export const getUser = () => usersApi.getUsers();
export const getMe = () => userApi.getMe();

export const updateUser = (body: User) =>
  usersApi.updateUsers({ body: UserToJSON(body) });
