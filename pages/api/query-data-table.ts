// pages/api/query.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { influxDB, org, bucket } from "@/lib/influx";
import camelcaseKeys from "camelcase-keys";
import { plus24Hours } from "@/components/utils/format";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { type = "Altitude", date } = req.query;
  const queryApi = influxDB.getQueryApi(org);

  const selectedDate = date;
  const formatDate = plus24Hours(selectedDate as string);
  console.log(formatDate.endDate, formatDate.startDate);

  const fluxQuery = `
  from(bucket: "${bucket}")
        |> range(start: time(v: "${formatDate.startDate}"), stop: time(v: "${formatDate.endDate}"))
        |> filter(fn: (r) => r["_measurement"] == "RedStation")
        |> filter(fn: (r) => r["_field"] == "${type}")
        |> aggregateWindow(every: 1m, fn: mean, createEmpty: false)
        |> yield(name: "hourly_mean")
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
