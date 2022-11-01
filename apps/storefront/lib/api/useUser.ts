import { usersApi, userApi } from "./typescript-fetch";

export const getUser = () => usersApi.getUsers();
export const getMe = () => userApi.getMe();
export const updateUser = (body: any) => usersApi.updateUsers({ body });
