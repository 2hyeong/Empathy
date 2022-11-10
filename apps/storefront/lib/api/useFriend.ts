import { Friend, FriendToJSON } from "idl/gen/typescript-fetch";
import { operations } from "idl/gen";
import { friendApi, friendsApi } from "./typescript-fetch";

export const getFriend = (
  friendId: operations["getFriend"]["parameters"]["path"]["friendId"]
) => friendApi.getFriend({ friendId });

export const getFriends = () => friendsApi.getFriends();

export const createFriend = (body: Friend) =>
  friendsApi.createFriend({ body: FriendToJSON(body) });

export const deleteFriend = (
  friendId: operations["getFriend"]["parameters"]["path"]["friendId"]
) => friendsApi.deleteFriend({ friendId });
