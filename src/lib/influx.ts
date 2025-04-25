import { InfluxDB } from "@influxdata/influxdb-client";

export const url = process.env.NEXT_PUBLIC_INFLUXDB_URL!;
export const token = process.env.NEXT_PUBLIC_INFLUXDB_TOKEN!;
export const org = process.env.NEXT_PUBLIC_INFLUXDB_ORG!;
export const bucket = process.env.NEXT_PUBLIC_INFLUXDB_BUCKET!;

export const influxDB = new InfluxDB({ url, token });
