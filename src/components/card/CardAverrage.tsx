import { cn } from "@/lib/utils";
import React from "react";
interface CardAverrageProps {
  unit: string;
  data: number;
  className?: string;
}
export const CardAverrage = ({ unit, data, className }: CardAverrageProps) => {
  const valueRounded = parseFloat(Number(data).toFixed(3));
  return (
    <div
      className={cn(
        " min-w-[40px] max-w-[120px] md:min-w-[150px] h-[120px] md:max-h-[100px]  lg:min-w-[20vw] m-2 bg-blue-500 rounded-md text-white ",
        className
      )}
    >
      <div className="p-2">Average</div>
      <div className="flex justify-center text-xl pl-2">
        {valueRounded} {unit}
      </div>
    </div>
  );
};
