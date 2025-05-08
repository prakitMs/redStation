import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

interface DeviceSelectionProps {
  onChange?: (deviceSelected: string) => void;
}

export const DeviceSelection = ({ onChange }: DeviceSelectionProps) => {
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);

  const handleValueChange = (value: string) => {
    if (onChange) {
      onChange(value); // ส่งค่าไปยัง onChange หากมีการระบุ
    }
    setIsSelectorVisible(false); // ปิด selector หลังจากเลือกค่า
  };
  return (
    <div>
      <div className="flex justify-end">
        <Button
          onClick={() => setIsSelectorVisible((prev) => !prev)}
          className="bg-[#003e78] text-white rounded-md hover:bg-blue-600 transition"
        >
          {isSelectorVisible ? "close" : "Select device "}
        </Button>
      </div>

      {isSelectorVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <button
            onClick={() => setIsSelectorVisible(false)}
            className="absolute top-5 right-5 text-white hover:text-gray-300"
          >
            <AiFillCloseSquare className="w-6 h-6" />
          </button>
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-[180px] bg-[#BBDCFC]">
              <SelectValue placeholder="Select Device " />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Device</SelectLabel>
                <SelectItem value="1m">RedStation </SelectItem>
                <SelectItem value="1m">RedStation2 </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};
