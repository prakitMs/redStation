import React from "react";
import { BsEmojiLaughing } from "react-icons/bs";
interface MarkerLogProps {
  "pm2.5": number;
  pm10: number;
  pm100: number;
  o2: number;
  co2: number;
  onClose: () => void;
}

const MarkerLog: React.FC<MarkerLogProps> = ({
  "pm2.5": pm25,
  pm10,
  pm100,
  o2,
  co2,
  onClose,
}) => {
  return (
    <div className="bg-white absolute inset-x-0 bottom-0 flex justify-between space-x-2 p-5  max-h-[20vh] z-30">
      <BsEmojiLaughing className="w-[80px] h-[80px] md:w-20 md:h-20 bg-green-500 rounded-full" />
      <div className="flex items-start">
        <div className="text-black text-2xl ">
          PM2.5 <div>{pm25}</div>
        </div>
        <div className="text-black text-2xl ml-10">
          PM10 <div>{pm10}</div>
        </div>
        <div className="text-black text-2xl ml-10">
          PM100 <div>{pm100}</div>
        </div>
        <div className="text-black text-2xl ml-10">
          O2 <div>{o2}</div>
        </div>
        <div className="text-black text-2xl ml-10">
          CO2 <div>{co2}</div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="flex top-0 hover:bg-gray-400 h-6 w-5 rounded-md text-lg"
      >
        ❌
      </button>
    </div>
  );
};

export default MarkerLog;
