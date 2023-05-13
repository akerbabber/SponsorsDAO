// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Hacker } from "@/interfaces/front";
import { exampleHackers } from "@/examples";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Hacker>>
) {
  res.status(200).json(exampleHackers);
}
