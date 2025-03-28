import { IDashboard } from "@/interface/dashboard";
import { AirQuality } from "./AirQuality";
import { Environment } from "./Environment";
import { Gas } from "./Gas";
import { Weather } from "./Weather";
import { Expose } from "class-transformer";

export class Dashboard implements IDashboard {
  timestamp = "";
  latitude = 0;
  longitude = 0;
  airQuality = new AirQuality();
  environment = new Environment();
  gas = new Gas();
  weather = new Weather();

  @Expose({ toClassOnly: true })
  get dashboardData(): {
    title: string;
    data: { label: string; value: string | number }[];
  }[] {
    const airQuality = {
      title: "Air Quality",
      data: [
        { label: "Carbon Dioxide", value: this.airQuality.co2 },
        { label: "Oxygen", value: this.airQuality.o2 },
        { label: "PM1.0", value: this.airQuality.pm1 },
        { label: "PM2.5", value: this.airQuality.pm25 },
        { label: "PM10", value: this.airQuality.pm10 },
        { label: "PM100", value: this.airQuality.pm100 },
      ],
    };
    const environment = {
      title: "Environment",
      data: [
        { label: "Altitude", value: this.environment.altitude },
        { label: "Humidity", value: this.environment.humidity },
        { label: "Pressure", value: this.environment.pressure },
        { label: "Temperature", value: this.environment.temperature },
        { label: "Ultraviolet(UV)", value: this.environment.uv },
        { label: "Sound Level", value: this.airQuality.sound },
      ],
    };
    const gas = {
      title: "Gas",
      data: [
        { label: "Carbon Monoxide", value: this.gas.co },
        { label: "Ammonia", value: this.gas.nh3 },
        { label: "Nitrogen Dioxide", value: this.gas.no2 },
        { label: "Sulfer Dioxide", value: this.gas.so2 },
      ],
    };

    const weather = {
      title: "Weather",
      data: [
        { label: "Wind Direct", value: this.weather.direct },
        { label: "Rainfall", value: this.weather.rain },
        { label: "Wind Speed", value: this.weather.speed },
      ],
    };
    return [airQuality, environment, gas, weather];
  }

  @Expose({ toClassOnly: true })
  get pointData(): {
    title: string;
    latitude: number;
    longitude: number;
    "pm2.5": number;
  }[] {
    const bangkok1 = {
      title: "bangkok1",
      latitude: this.latitude,
      longitude: this.longitude,
      "pm2.5": this.airQuality.pm25,
    };

    return [bangkok1];
  }
}
