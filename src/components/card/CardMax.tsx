import React from "react";
import { formatDateToThaiHour } from "../utils/format";
import { cn } from "@/lib/utils";

interface CardMaxprops {
  data?: number;
  unit: string;
  time: string;
  className?: string;
}

export const CardMax = ({ data, unit, time, className }: CardMaxprops) => {
  const timeFull = formatDateToThaiHour(time);
  const valueRounded = parseFloat(Number(data).toFixed(3));
  return (
    <div
      className={cn(
        "min-w-[40px] max-w-[120px] md:min-w-[150px] h-[120px] md:max-h-[100px] lg:min-w-[20vw] m-2 bg-red-500 rounded-md text-white ",
        className
      )}
    >
      <div className="p-2">Maximum</div>
      <div className="flex justify-center  text-xl">
        {valueRounded} {unit}
      </div>
      <div className="pl-2">{timeFull} </div>
    </div>
  );
};
