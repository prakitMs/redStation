export interface IDashboard {
timestamp: string
airQuality: IAirQuality 
environment: IEnvironment
gas: IGas
weather: IWeather

}
export interface IAirQuality {
  co2: number;
  o2: number;
  pm1: number;
  pm10: number;
  pm25: number;
  pm100: number;
  sound: number;
}

export interface IEnvironment {
  altitude: number;
  humidity: number;
  pressure: number;
  temperature: number;
  uv: number;
}

export interface IGas {
  co: number;
  nh3: number;
  no2: number;
  so2: number;
}

export interface IWeather {
  direct: number;
  rain: number;
  speed: number;
}