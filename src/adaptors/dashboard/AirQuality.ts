import { IAirQuality } from "@/interface/dashboard";
export  class AirQuality implements IAirQuality{
  co2 = 0;
  o2 = 0;
  pm1 = 0;
  pm10 = 0;
  pm25 = 0;
  pm100 = 0;
  sound = 0;
}