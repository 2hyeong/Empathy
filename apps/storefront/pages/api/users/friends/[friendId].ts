import { NextApiRequest, NextApiResponse } from "next";
import { firestore, friendConverter } from "scripts";
import type { operations } from "idl";
import { getSession } from "next-auth/react";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<
    | operations["getFriend"]["responses"]["200"]["content"]["application/json"]
    | operations["getFriend"]["responses"]["default"]["content"]["application/json"]
    | operations["deleteFriend"]["responses"]["200"]["content"]["application/json"]
    | operations["deleteFriend"]["responses"]["default"]["content"]["application/json"]
  >
) => {
  const session = await getSession({ req });
  const userId = session?.user.id;

  if (req.method === "GET") {
    if (!userId) return res.status(400).end();
    if (!req.query || !req.query.friendId) return res.status(400).end();
    const { friendId } = req.query;

    const snapshots = await firestore
      .collection("users")
      .doc(userId)
      .collection("friends")
      .doc(friendId as string)
      .withConverter(friendConverter)
      .get();

    if (!snapshots.exists)
      return res.status(404).json({
        code: 404,
        message: "Not Found",
      });

    const friend = {
      id: snapshots.id,
      ...snapshots.data(),
    };

    return res.status(200).json(friend);
  }

  if (req.method === "DELETE") {
    if (!userId) return res.status(400).end();
    try {
      const { friendId } = req.query;

      if (!friendId) {
        res.status(400).json({
          code: 400,
          message: "friendId should be given",
        });
      }

      await firestore
        .collection("users")
        .doc(userId)
        .collection("friends")
        .doc(friendId as string)
        .delete();
    } catch (e) {
      console.error(e);
    }
    return res.status(200).json({ ok: true });
  }

  return res.status(501).end();
};
