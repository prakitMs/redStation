import React from "react";
import { formatDateToThaiHour } from "../utils/format";

interface CardMaxprops {
  data?: number;
  unit: string;
  time: string;
}

export const CardMax = ({ data, unit, time }: CardMaxprops) => {
  const timeFull = formatDateToThaiHour(time);
  const valueRounded = parseFloat(Number(data).toFixed(3));
  return (
    <div className=" min-w-[50px] h-[100px] bg-red-500 rounded-md text-white ">
      <div className="p-2">Maximum</div>
      <div className="flex justify-center  text-xl">
        {valueRounded} {unit}
      </div>
      <div className="pl-2">{timeFull} </div>
    </div>
  );
};
