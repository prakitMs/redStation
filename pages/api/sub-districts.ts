import type { NextApiRequest, NextApiResponse } from "next";
import { dbClient } from "@/lib/dbClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { districtId } = req.query;
  const districtIdNum = parseInt(districtId as string, 10);
  try {
    const results = await dbClient.tambons.findMany({
      where: {
        amphure_id: districtIdNum,
      },
    });
    res.status(200).json(results);
  } catch (error: any) {
    console.error("❌ Error querying sub-districts:", error);
    res.status(500).json({ error: error.message || "Unknown error" });
  }
}
