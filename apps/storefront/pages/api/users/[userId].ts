import { NextApiRequest, NextApiResponse } from "next";
import { db, userConverter } from "scripts";
import { operations } from "idl";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<
    | operations["getUser"]["responses"]["200"]["content"]["application/json"]
    | operations["getUser"]["responses"]["default"]["content"]["application/json"]
  >
) => {
  let { userId } = req.query as {
    userId: string;
  };

  if (!userId) {
    return res.status(400).json({
      code: 400,
      message: "paramter user_id is empty.",
    });
  }

  if (req.method === "GET") {
    const user = await db.get("users").where(userId, userConverter);

    if (!user)
      return res.status(204).json({
        code: 204,
        message: "User not found.",
      });

    return res.status(200).json(user);
  }

  return res.status(404).end();
};
