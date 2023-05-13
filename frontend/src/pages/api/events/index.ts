// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Hackathon } from "@/interfaces/front";
import { exampleHackathons } from "@/examples";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Hackathon>>
) {
  res.status(200).json(exampleHackathons);
}
