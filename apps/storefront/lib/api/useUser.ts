import { User, UserToJSON } from "idl/gen/typescript-fetch";
import { usersApi, userApi, friendsApi } from "./typescript-fetch";

export const getUser = () => usersApi.getUsers();
export const getMe = () => userApi.getMe();
export const updateUser = (body: any) => usersApi.updateUsers({ body });

export const createFriend = (body: any) => friendsApi.createFriend({ body });
