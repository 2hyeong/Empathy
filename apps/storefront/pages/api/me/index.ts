import { NextApiRequest, NextApiResponse } from "next";
import { db, userConverter } from "scripts";
import { getToken } from "next-auth/jwt";
import { operations } from "idl/gen";

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

    if (!user) return res.status(204).end();

    return res.status(200).json(user);
  }

  return res.status(501).end();
};
