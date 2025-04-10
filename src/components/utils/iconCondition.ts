import { COLOR } from "@/constant/markerColor";

export function getColorByValue(value: number) {
  if (value <= 25) return COLOR.veryGood;
  if (value <= 50) return COLOR.good;
  if (value <= 100) return COLOR.bad;
  if (value <= 150) return COLOR.veryBad;
  return COLOR.dangerous;
}

export function getIconByValue(value: number) {
  if (value <= 25) return "veryGood";
  if (value <= 50) return "good";
  if (value <= 100) return "bad";
  if (value <= 150) return "veryBad";
  return "dangerous";
}
