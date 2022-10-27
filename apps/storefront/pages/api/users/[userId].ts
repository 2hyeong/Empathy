import { NextApiRequest, NextApiResponse } from "next";
import { db } from "scripts/src/firebase-admin";
import { components } from "idl";

type ErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<any | ErrorResponse>
) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(500).end();
  }

  if (req.method === "GET") {
    const user = await db.collection("users").doc(userId.toString()).get();
    if (!user.data) {
      return res.status(404).end();
    }
    return res.status(200).json(user.data());
  }

  if (req.method === "PUT") {
    const user = await db
      .collection("users")
      .doc(userId.toString())
      .update(req.body);
    console.log(user);
    return res.status(200).json(user);
  }

  return res.send("Method not allowed.");
};
