import { NextApiRequest, NextApiResponse } from "next";
import { firestore, friendConverter } from "scripts";
import type { operations } from "idl";
import { getSession } from "next-auth/react";
import { Friend } from "idl/gen/typescript-fetch";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<
    | operations["getFriends"]["responses"]["200"]["content"]["application/json"]
    | operations["getFriends"]["responses"]["default"]["content"]["application/json"]
    | operations["createFriend"]["responses"]["200"]["content"]["application/json"]
    | operations["createFriend"]["responses"]["default"]["content"]["application/json"]
  >
) => {
  const session = await getSession({ req });
  const userId = session?.user.id;

  if (req.method === "GET") {
    if (!userId) return res.status(400).end();

    const snapshots = await await firestore
      .collection("users")
      .doc(userId)
      .collection("friends")
      .withConverter(friendConverter)
      .get();

    if (snapshots.empty) {
      return res.status(200).json([]);
    }

    const friends = snapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json(friends);
  }

  if (req.method === "POST") {
    if (!userId) return res.status(400).end();
    try {
      const body: Friend = JSON.parse(req.body);
      await firestore
        .collection("users")
        .doc(userId)
        .collection("friends")
        .add(body);
    } catch (e) {
      console.error(e);
      throw e;
    }
    return res.status(200).json({ ok: true });
  }

  return res.status(501).end();
};
