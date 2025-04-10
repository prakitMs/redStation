import React from "react";
interface CardMinProps {
  unit: string;
}
export const CardMin = ({ unit }: CardMinProps) => {
  return (
    <div className=" min-w-[50px] h-[100px] bg-green-500 rounded-md text-white ">
      <div className="p-2">ค่าสูงสุด</div>
      <div className="flex justify-center  text-xl">10 {unit}</div>
      <div className="pl-2">12:00 </div>
    </div>
  );
};
