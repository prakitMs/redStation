// pages/api/query.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { influxDB, org, bucket } from "@/lib/influx";
import camelcaseKeys from "camelcase-keys";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type = "Altitude" } = req.query;
  const queryApi = influxDB.getQueryApi(org);

  console.log({ type });

  const fluxQuery = `
    from(bucket: "${bucket}")
  |> range(start: -1h) // หรือ -30d, หรือ timestamp ก็ได้
  |> filter(fn: (r) => r["_measurement"] == "RedStation")
  |> filter(fn: (r) => r["_field"] == "${type}")
  |> sort(columns: ["_time"], desc: true)
  |> limit(n: 1)

  `;

  const results: any[] = [];

  try {
    await new Promise<void>((resolve, reject) => {
      queryApi.queryRows(fluxQuery, {
        next(row, tableMeta) {
          const obj = tableMeta.toObject(row);
          results.push(camelcaseKeys(obj));
        },
        error(error) {
          reject(error);
        },
        complete() {
          resolve();
        },
      });
    });

    res.status(200).json(results);
  } catch (error: any) {
    console.error("❌ Error querying InfluxDB:", error);
    res.status(500).json({ error: error.message || "Unknown error" });
  }
}
