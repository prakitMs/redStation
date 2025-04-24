import { InfluxDB } from "@influxdata/influxdb-client";

// 🔍 Log เช็คค่าจาก .env ว่าถูกโหลดมามั้ย
console.log("🌐 INFLUXDB_URL:", process.env.NEXT_PUBLIC_INFLUXDB_URL);
console.log(
  "🔑 INFLUXDB_TOKEN:",
  process.env.NEXT_PUBLIC_INFLUXDB_TOKEN?.slice(0, 10) + "..."
);
console.log("🏢 INFLUXDB_ORG:", process.env.NEXT_PUBLIC_INFLUXDB_ORG);
console.log("🪣 INFLUXDB_BUCKET:", process.env.NEXT_PUBLIC_INFLUXDB_BUCKET);

export const url = process.env.NEXT_PUBLIC_INFLUXDB_URL!;
export const token = process.env.NEXT_PUBLIC_INFLUXDB_TOKEN!;
export const org = process.env.NEXT_PUBLIC_INFLUXDB_ORG!;
export const bucket = process.env.NEXT_PUBLIC_INFLUXDB_BUCKET!;

export const influxDB = new InfluxDB({ url, token });
