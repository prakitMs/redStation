import type { NextApiRequest, NextApiResponse } from "next";
import { dbClient } from "@/lib/dbClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { regionId } = req.query;
  const regionIdNum = parseInt(regionId as string, 10);
  console.log(regionId);
  try {
    const results = await dbClient.provinces.findMany({
      where: {
        geography_id: regionIdNum,
      },
    });
    res.status(200).json(results);
  } catch (error: any) {
    console.error("❌ Error querying provices:", error);
    res.status(500).json({ error: error.message || "Unknown error" });
  }
}
