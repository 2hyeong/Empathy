import { NextApiRequest, NextApiResponse } from "next";
import { db, userConverter } from "scripts";
import type { operations } from "idl";
import { getSession } from "next-auth/react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { getToken } from "next-auth/jwt";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<
    | operations["getMe"]["responses"]["200"]["content"]["application/json"]
    | operations["getUser"]["responses"]["default"]["content"]["application/json"]
  >
) => {
  const token = await getToken({ req });
  if (!token) res.status(401); // not signed in

  if (req.method === "GET") {
    const user = await db.get("users").where(token?.user.id, userConverter);

    if (!user)
      return res.status(204).json({
        code: 204,
        message: "User not found.",
      });

    return res.status(200).json(user);
  }

  return res.status(501).end();
};
