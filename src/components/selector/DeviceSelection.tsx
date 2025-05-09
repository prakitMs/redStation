import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useGetDeviceName } from "@/api/device-name";

interface DeviceSelectionProps {
  onChange?: (deviceSelected: string) => void;
}

export const DeviceSelection = ({ onChange }: DeviceSelectionProps) => {
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const { data } = useGetDeviceName();

  const handleValueChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
    setIsSelectorVisible(false);
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
          <button
            onClick={() => setIsSelectorVisible(false)}
            className="absolute top-5 right-5 text-white hover:text-gray-300"
          >
            <AiFillCloseSquare className="w-6 h-6" />
          </button>
          <div className=""></div>
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-[180px] bg-[#BBDCFC]">
              <SelectValue placeholder="Select Device " />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {data.deviceName.map((item, index) => (
                  <SelectItem key={`${item}-${index}`} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};
