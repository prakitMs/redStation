import type { NextApiRequest, NextApiResponse } from "next";
import { dbClient } from "@/lib/dbClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const results = await dbClient.region.findMany({});
    res.status(200).json(results);
  } catch (error: any) {
    console.error("❌ Error querying region:", error);
    res.status(500).json({ error: error.message || "Unknown error" });
  }
}
