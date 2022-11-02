import { NextApiRequest, NextApiResponse } from "next";
import { db, userConverter } from "scripts";
import type { operations } from "idl";
import { getSession } from "next-auth/react";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<
    | operations["getMe"]["responses"]["200"]["content"]["application/json"]
    | operations["getUser"]["responses"]["default"]["content"]["application/json"]
  >
) => {
  const session = await getSession({ req });

  if (!session?.user?.id) return res.status(400).end();

  if (req.method === "GET") {
    const user = await db.get("users").where(session.user.id, userConverter);

    if (!user)
      return res.status(204).json({
        code: 204,
        message: "User not found.",
      });

    return res.status(200).json(user);
  }

  return res.status(501).end();
};