import { rest } from "msw";
import { Friend } from "idl/gen/typescript-fetch";

const friends = [
  {
    name: "홍길동",
    personality: "ISTP",
  },
];

export const getFriends = (mockData?: Friend[]) =>
  rest.get("/api/users/friends", (req, res, ctx) => {
    if (mockData) return res(ctx.status(200), ctx.json(mockData));

    return res(ctx.status(200), ctx.json(friends));
  });

export const addFriends = () =>
  rest.post("/api/users/friends", async (req, res, ctx) => {
    const body = await req.json();
    const newFriends = friends;
    newFriends.push(body);
    return res(ctx.status(200), ctx.json(newFriends));
  });

export default [getFriends(), addFriends()];
