import { NextApiRequest, NextApiResponse } from "next";
import { db, userConverter } from "scripts";
import type { operations } from "idl";
import { getSession } from "next-auth/react";
import { FieldValue } from "@google-cloud/firestore";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<
    | operations["updateUsers"]["responses"]["200"]["content"]["application/json"]
    | operations["updateUsers"]["responses"]["default"]["content"]["application/json"]
  >
) => {
  const session = await getSession({ req });
  const userId = session?.user.id;

  if (req.method === "GET") {
    if (!userId) return res.status(400).end();

    const user = await db.get("users").where(userId, userConverter);

    // to be added
    // const friends = await db.get("friends").where(userId, userConverter);
    // user + friends

    return res.status(200).json(user.friends);
  }

  if (req.method === "POST") {
    if (!userId) return res.status(400).end();
    try {
      let body = JSON.parse(req.body);
      const friends = FieldValue.arrayUnion(body);

      await db.update("users", { friends }).where(userId);
    } catch (e) {
      console.error(e);
    }
    return res.status(200).json({ ok: true });
  }

  if (req.method === "DELETE") {
    if (!userId) return res.status(400).end();
    try {
      let body = JSON.parse(req.body);
      const friends = FieldValue.arrayUnion(body);

      await db.update("users", { friends }).where(userId);
    } catch (e) {
      console.error(e);
    }
    return res.status(200).json({ ok: true });
  }

  return res.status(501).end();
};
