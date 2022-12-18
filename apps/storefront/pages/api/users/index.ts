import { NextApiRequest, NextApiResponse } from "next";
import { db, userConverter } from "scripts";
import type { operations } from "idl";
import { getSession } from "next-auth/react";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<
    | operations["getUsers"]["responses"]["200"]["content"]["application/json"]
    | operations["getUsers"]["responses"]["default"]["content"]["application/json"]
    | operations["updateUsers"]["responses"]["200"]["content"]["application/json"]
    | operations["updateUsers"]["responses"]["default"]["content"]["application/json"]
  >
) => {
  const session = await getSession({ req });

  if (req.method === "GET") {
    const users = await db.getAll("users", userConverter);
    return res.status(200).json(users);
  }

  if (req.method === "PUT") {
    if (!session?.user?.id) return res.status(400).end();
    try {
      await db.update("users", JSON.parse(req.body)).where(session?.user?.id);
    } catch (e) {
      console.error(e);
      throw e;
    }
    return res.status(200).json({ ok: true });
  }

  return res.status(501).end();
};
