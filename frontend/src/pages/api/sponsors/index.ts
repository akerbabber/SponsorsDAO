// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Sponsor } from "@/interfaces/front";
import { exampleSponsors } from "@/examples";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Sponsor>>
) {
  res.status(200).json(exampleSponsors);
}
