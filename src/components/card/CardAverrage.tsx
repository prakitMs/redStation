import { cn } from "@/lib/utils";
import React from "react";
interface CardAverrageProps {
  unit: string;
}
export const CardAverrage = ({ unit }: CardAverrageProps) => {
  return (
    <div className=" min-w-[70px] min-h-[100px] bg-blue-500 rounded-md text-white ">
      <div className="p-2">ค่าสูงสุด</div>
      <div className="flex justify-center  text-xl">50 {unit}</div>
      <div className="pl-2">12:00 </div>
    </div>
  );
};
