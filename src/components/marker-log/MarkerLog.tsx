import React from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { getIconByValue } from "../utils/iconCondition";
import { COLOR } from "@/constant/markerColor";
import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from "react-icons/ci";
import {
  FaRegFaceDizzy,
  FaRegFaceFrown,
  FaRegFaceMeh,
  FaRegFaceSmile,
} from "react-icons/fa6";
interface MarkerLogProps {
  "pm2.5": number;
  pm10: number;
  pm100: number;
  o2: number;
  co2: number;
  onClose: () => void;
}

const renderIcon = (value: string) => {
  switch (value) {
    case "veryGood":
      return (
        <BsEmojiLaughing
          className="w-[40px] h-[40px] md:w-[85px] md:h-[85px] md:mb-10 lg:w-[100px] lg:h-[100px] rounded-full"
          style={{ background: COLOR.veryGood }}
        />
      );
    case "good":
      return (
        <FaRegFaceSmile
          className="w-[40px] h-[40px] md:w-[85px] md:h-[85px] md:mb-10 lg:w-[100px] lg:h-[100px] rounded-full"
          style={{ background: COLOR.good }}
        />
      );
    case "bad":
      return (
        <FaRegFaceMeh
          className="w-[40px] h-[40px] md:w-[85px] md:h-[85px] md:mb-10 lg:w-[100px] lg:h-[100px] rounded-full"
          style={{ background: COLOR.bad }}
        />
      );
    case "veryBad":
      return (
        <FaRegFaceFrown
          className="w-[40px] h-[40px] md:w-[85px] md:h-[85px] md:mb-10 lg:w-[100px] lg:h-[100px] rounded-full"
          style={{ background: COLOR.veryBad }}
        />
      );
    case "dangerous":
      return (
        <FaRegFaceDizzy
          className="w-[40px] h-[40px] md:w-[85px] md:h-[85px] md:mb-10 lg:w-[100px] lg:h-[100px] rounded-full"
          style={{ background: COLOR.dangerous }}
        />
      );
  }
};

const MarkerLog: React.FC<MarkerLogProps> = ({
  "pm2.5": pm25,
  pm10,
  pm100,
  o2,
  co2,
  onClose,
}) => {
  return (
    <div className="bg-white absolute inset-x-0 bottom-0 flex justify-between space-x-2 p-1 md:p-5  max-h-[130px] z-30 md:pl-10">
      <div>{renderIcon(getIconByValue(pm25))}</div>
      <div className="flex items-start">
        <div className="text-black text-sm lg:text-2xl md:text-xl ">
          PM2.5 <div>{pm25}</div>
        </div>
        <div className="text-black text-sm lg:text-2xl ml-2 md:ml-10 md:text-xl">
          PM10 <div>{pm10}</div>
        </div>
        <div className="text-black text-sm lg:text-2xl ml-2 md:ml-10 md:text-xl">
          PM100 <div>{pm100}</div>
        </div>
        <div className="text-black text-sm lg:text-2xl ml-2 md:ml-10 md:text-xl">
          O2 <div>{o2}</div>
        </div>
        <div className="text-black text-sm lg:text-2xl ml-2 md:ml-10 md:text-xl">
          CO2 <div>{co2}</div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="flex top-0 hover:bg-gray-400 h-5 w-5 rounded-md text-lg"
      >
        <IoMdClose className="text-red-500 " />
      </button>
    </div>
  );
};

export default MarkerLog;
