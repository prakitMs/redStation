interface AirQuality {
  co2: number;
  o2: number;
  pm1: number;
  pm10: number;
  pm25: number;
  pm100: number;
  sound: number;
}

interface Environment {
  altitude: number;
  humidity: number;
  pressure: number;
  temperature: number;
  uv: number;
}

interface Gas {
  co: number;
  nh3: number;
  no2: number;
  so2: number;
}

interface Weather {
  direct: number;
  rain: number;
  speed: number;
}