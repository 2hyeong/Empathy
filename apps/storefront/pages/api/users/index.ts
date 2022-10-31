import { NextApiRequest, NextApiResponse } from "next";
import { db, firestore, userConverter } from "scripts";
import type { components, operations } from "idl";
import { getSession } from "next-auth/react";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<
    | operations["getUsers"]["responses"]["200"]["content"]["application/json"]
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
    const data = await db.update("users", req.body).where(session?.user?.id);
    return res.status(200).json({ ok: true });
  }

  return res.status(501).end();
};
