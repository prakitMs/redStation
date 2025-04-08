import React from "react";

interface CardMaxprops {
  unit: string;
}
export const CardMax = ({ unit }: CardMaxprops) => {
  return (
    <div className=" w-[200px] h-[100px] bg-red-500 rounded-md text-white ">
      <div className="p-2">ค่าสูงสุด</div>
      <div className="flex justify-center font-bold text-2xl">100 {unit}</div>
      <div className="pl-2">12:00 </div>
    </div>
  );
};
