"use client";

import { ReactNode } from "react";

interface CardProps {
  title: string;
  data: { label: ReactNode; value: string | number }[];
}

const Card = ({ title, data }: CardProps) => {
  return (
    <div className="bg-gradient-to-r from-[#add8f0] to-[#e9d1d3] m-3 border-[2px] border-[#a09c93] shadow-lg rounded-xl p-2">
      <div className="text-[20px] text-black flex justify-center">{title}</div>

      {data.map(({ label, value }, idx) => (
        <div key={`${label}-${idx}`} className="grid grid-cols-3 gap-2">
          <div className="text-sm col-span-2">{label}</div>
          <p className="text-right">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
