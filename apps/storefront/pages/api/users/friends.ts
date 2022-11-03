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

  if (req.method === "POST") {
    if (!session?.user?.id) return res.status(400).end();
    try {
      let body = JSON.parse(req.body);
      const friends = FieldValue.arrayUnion(body);

      await db.update("users", { friends }).where(session?.user?.id);
    } catch (e) {
      console.error(e);
    }
    return res.status(200).json({ ok: true });
  }

  if (req.method === "DELETE") {
    if (!session?.user?.id) return res.status(400).end();
    try {
      let body = JSON.parse(req.body);
      const friends = FieldValue.arrayUnion(body);

      await db.update("users", { friends }).where(session?.user?.id);
    } catch (e) {
      console.error(e);
    }
    return res.status(200).json({ ok: true });
  }

  return res.status(501).end();
};
