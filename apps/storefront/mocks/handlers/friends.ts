import { rest } from "msw";
import { Friend } from "idl/gen/typescript-fetch";

export const mockfriends = [
  { id: "558RsS1UiFlM4Oulrh6z", personality: "ESTP", name: "atest" },
  { id: "6rImCTGbnaerDHisd8dY", personality: "INFJ", name: "asfd" },
];

export const getFriends = (overrideData?: Friend[]) =>
  rest.get("/api/users/friends", (req, res, ctx) => {
    if (overrideData) return res(ctx.status(200), ctx.json(overrideData));
    return res(ctx.status(200), ctx.json(mockfriends));
  });

export const getFriend = () =>
  rest.get("/api/users/friends/:friendId", (req, res, ctx) => {
    const { friendId } = req.params;
    const friend = mockfriends.filter((f) => f.id === friendId)[0];
    return res(ctx.status(200), ctx.json(friend));
  });

export const addFriends = () =>
  rest.post("/api/users/friends", async (req, res, ctx) => {
    const body = await req.json();
    const newFriends = mockfriends;
    newFriends.push(body);
    return res(ctx.status(200), ctx.json(newFriends));
  });

export default [getFriend(), getFriends(), addFriends()];
