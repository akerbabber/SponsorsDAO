// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Hacker } from "@/interfaces/front";
import { exampleHackers } from "@/examples";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hacker>
) {
  const { hackerId } = req.query;
  res.status(200).json(exampleHackers[parseInt((hackerId as string) || "0")]);
}
