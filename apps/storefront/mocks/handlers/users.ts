import { rest } from "msw";

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
    friends: [
      { id: "558RsS1UiFlM4Oulrh6z", personality: "ESTP", name: "atest" },
      { id: "6rImCTGbnaerDHisd8dY", personality: "INFJ", name: "asfd" },
    ],
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

export const updateUsers = () =>
  rest.put("/api/users", (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ ok: true }))
  );

export default [getUsers(), getMe(), updateUsers()];
