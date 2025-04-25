import React from "react";
interface CardAverrageProps {
  unit: string;
  data: number;
}
export const CardAverrage = ({ unit, data }: CardAverrageProps) => {
  const valueRounded = parseFloat(Number(data).toFixed(3));
  return (
    <div className=" min-w-[70px] min-h-[100px] bg-blue-500 rounded-md text-white ">
      <div className="p-2">ค่าเฉลี่ย</div>
      <div className="flex justify-center  text-xl">
        {valueRounded} {unit}
      </div>
    </div>
  );
};
