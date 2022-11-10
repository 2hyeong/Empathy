import { rest } from "msw";
import { Friend } from "idl/gen/typescript-fetch";

const friends = [
  {
    id: "0",
    name: "홍길동",
    personality: "ISTP",
  },
];

const users = [
  {
    id: "Y0y0GKFXDNuyX6OO5QHD",
    birthday: "0118",
    ageRange: "30~39",
    image:
      "http://k.kakaocdn.net/dn/ckXZBw/btrPDkVvdea/Pz0mY8MStAI5zlIDsCJ5t0/img_640x640.jpg",
    gender: "male",
    emailVerified: null,
    name: "이두형",
    email: "doohl2@kakao.com",
    personality: "INTP",
    friends: [{ name: "홍길동", personality: "INTP" }],
  },
];

const me = {
  name: "이두형",
  personality: "",
};

export const getUsers = () =>
  rest.get("api/users", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(users))
  );

export const getMe = () =>
  rest.get("/api/me", (req, res, ctx) => res(ctx.status(200), ctx.json(me)));

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

export const updateUsers = () =>
  rest.put("/api/users", (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ ok: true }))
  );

export default [getFriends(), addFriends(), getUsers(), getMe(), updateUsers()];
