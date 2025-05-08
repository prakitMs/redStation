import React from "react";
import { formatDateToThaiHour } from "../utils/format";
interface CardMinProps {
  unit: string;
  time: string;
  data?: number;
}
export const CardMin = ({ unit, time, data }: CardMinProps) => {
  const timeFull = formatDateToThaiHour(time);
  const valueRounded = parseFloat(Number(data).toFixed(3));

  return (
    <div className=" min-w-[50px] h-[100px] bg-green-500 rounded-md text-white ">
      <div className="p-2">Minimum</div>
      <div className="flex justify-center  text-xl">
        {valueRounded} {unit}
      </div>
      <div className="pl-2">{timeFull}</div>
    </div>
  );
};
