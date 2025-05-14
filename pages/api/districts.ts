import type { NextApiRequest, NextApiResponse } from "next";
import { dbClient } from "@/lib/dbClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { provincesId } = req.query;
  const provincesIdNum = parseInt(provincesId as string, 10);
  try {
    const results = await dbClient.amphures.findMany({
      where: {
        province_id: provincesIdNum,
      },
    });
    res.status(200).json(results);
  } catch (error: any) {
    console.error("❌ Error querying provices:", error);
    res.status(500).json({ error: error.message || "Unknown error" });
  }
}
