"use client";

const labelByKey = {
  co2: (
    <div>
      Carbon Dioxide (CO<sub>2</sub>)
    </div>
  ),

  o2: (
    <div>
      Oxygen (O<sub>2</sub>)
    </div>
  ),
  pm1: <div>PM 1.0</div>,
  pm25: <div>PM 2.5</div>,
  pm10: <div>PM 10</div>,
  pm100: <div>PM 100</div>,
  altitude: <div>Altitude</div>,
  humidity: <div>Humidity</div>,
  pressure: <div>Pressure</div>,
  temperature: <div>Temperature</div>,
  uv: <div>Ultraviolet (UV)</div>,
  sound: <div>Sound Level</div>,
  co: <div>Carbon Monoxide (CO)</div>,
  nh3: (
    <div>
      Ammonia (NH<sub>3</sub>)
    </div>
  ),
  no2: (
    <div>
      Nitrogen Dioxide (NO<sub>2</sub>)
    </div>
  ),
  so2: (
    <div>
      Sulfur Dioxide (SO<sub>2</sub>)
    </div>
  ),
  direct: <div>Wind Direction</div>,
  speed: <div>Wind Speed</div>,
  rain: <div>Railfall</div>,
};

interface CardDashboardProps {
  title: string;
  data: { label: string; value: string | number }[];
}

export const CardDashboard = ({ title, data }: CardDashboardProps) => {
  return (
    <div className="bg-gradient-to-r from-[#add8f0] to-[#c0f8f8] m-1 border-[2px] border-[#a09c93] shadow-lg rounded-xl p-2">
      <div className="text-[18px] text-black flex justify-center">{title}</div>

      {data.map(({ label, value }, idx) => (
        <div key={`${label}-${idx}`} className="grid grid-cols-4 gap-2">
          <div className="text-sm col-span-3">
            {labelByKey[label as keyof typeof labelByKey] ?? "-"}
          </div>
          <p className="text-right">{value}</p>
        </div>
      ))}
    </div>
  );
};
