// pages/api/query.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { influxDB, org, bucket } from "@/lib/influx";
import { plus24Hours } from "@/components/utils/format";
import camelcaseKeys from "camelcase-keys";
import dayjs from "dayjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { dateFrom, dateTo, timeSelect } = req.query;
  const queryApi = influxDB.getQueryApi(org);

  const newDateTo = dateTo
    ? dayjs(dateTo as string)
        .add(24, "hour")
        .toISOString()
    : undefined;
  const dateNow = new Date();
  const { startDate, endDate } =
    !!dateFrom && !!dateTo
      ? { startDate: dateFrom, endDate: newDateTo }
      : plus24Hours(dateNow);

  const fluxQuery = `
   
      from(bucket: "${bucket}")
        |> range(start: time(v: "${startDate}"), stop: time(v: "${endDate}"))
        |> filter(fn: (r) => r["_measurement"] == "RedStation")
        |> filter(fn: (r) => r["_field"] == "PM1" or r["_field"] == "PM10" or r["_field"] == "PM100" or r["_field"] == "PM25")
        |> aggregateWindow(every: ${timeSelect}, fn: mean, createEmpty: false)
        |> yield(name: "hourly_mean")


      from(bucket: "${bucket}")
      |> range(start: time(v: "${startDate}"), stop: time(v: "${endDate}"))
        |> filter(fn: (r) => r["_field"] == "PM1" or r["_field"] == "PM10" or r["_field"] == "PM100" or r["_field"] == "PM25")
        |> max()
        |> yield(name: "max")

      from(bucket: "${bucket}")
      |> range(start: time(v: "${startDate}"), stop: time(v: "${endDate}"))
        |> filter(fn: (r) => r["_field"] == "PM1" or r["_field"] == "PM10" or r["_field"] == "PM100" or r["_field"] == "PM25")
        |> min()
        |> yield(name: "min")

      from(bucket: "${bucket}")
      |> range(start: time(v: "${startDate}"), stop: time(v: "${endDate}"))
        |> filter(fn: (r) => r["_field"] == "PM1" or r["_field"] == "PM10" or r["_field"] == "PM100" or r["_field"] == "PM25")
        |> mean()
        |> yield(name: "avg")
    `;

  const results: any[] = [];

  try {
    await new Promise<void>((resolve, reject) => {
      queryApi.queryRows(fluxQuery, {
        next(row, tableMeta) {
          const obj = tableMeta.toObject(row);
          results.push(camelcaseKeys(obj, { deep: true }));
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
