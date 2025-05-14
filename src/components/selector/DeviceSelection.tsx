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
import { useGetProvinces } from "@/api/provinces-query-supabase";
import { useGetRegions } from "@/api/region-query-supabase";
import { useGetDistricts } from "@/api/districts-query-supabase";
import { useGetSubDistricts } from "@/api/sub-districts-query-supabase";

interface DeviceSelectionProps {
  onChange?: (deviceSelected: string) => void;
}

export const DeviceSelection = ({ onChange }: DeviceSelectionProps) => {
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);
  const { data: regionData } = useGetRegions();
  const [seletedRegions, setSelecetedRegions] = useState<string>();

  const { data: proviceData } = useGetProvinces({ region: seletedRegions });
  const [selectedProvince, setSelectedProvince] = useState<string>();

  const { data: districtData } = useGetDistricts({
    provinces: selectedProvince,
  });
  const [selecteDitrict, setSelectedDistrict] = useState<string>();

  const { data: subDistrictsData } = useGetSubDistricts({
    district: selecteDitrict,
  });
  const [selecteSubDitrict, setSelectedSubDistrict] = useState<string>();

  return (
    <div>
      <div className="flex justify-end">
        {/* <div className="flex justify-end">
        <Button
          onClick={() => setIsSelectorVisible((prev) => !prev)}
          className="bg-[#003e78] text-white rounded-md hover:bg-blue-600 transition"
        >
          {isSelectorVisible ? "close" : "Select device "}
        </Button>
      </div> */}

        {/* {isSelectorVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
          <button
            onClick={() => setIsSelectorVisible(false)}
            className="absolute top-5 right-5 text-white hover:text-gray-300"
          >
            <AiFillCloseSquare className="w-6 h-6" />
          </button> */}

        <Select
          onValueChange={(id) => {
            setSelecetedRegions(id);
            setSelectedProvince("");
            setSelectedDistrict("");
            setSelectedSubDistrict("");
          }}
        >
          <SelectTrigger className="w-[180px] bg-[#BBDCFC] m-3">
            <SelectValue placeholder="Select Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {regionData?.data?.map((item) => (
                <SelectItem key={item.id.toString()} value={item.id.toString()}>
                  {item.nameThai}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(id) => {
            setSelectedProvince(id);
            setSelectedDistrict("");
            setSelectedSubDistrict("");
          }}
        >
          <SelectTrigger className="w-[180px] bg-[#BBDCFC] m-3">
            <SelectValue placeholder="Select Province" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {proviceData?.data?.map((item) => (
                <SelectItem key={item.id.toString()} value={item.id.toString()}>
                  {item.nameTh}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(id) => {
            setSelectedDistrict(id);
            onChange?.(id);
          }}
        >
          <SelectTrigger className="w-[180px] bg-[#BBDCFC] m-3">
            <SelectValue placeholder="Select District" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {districtData?.data?.map((item) => (
                <SelectItem key={item.id.toString()} value={item.id.toString()}>
                  {item.nameTh}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(id) => {
            setSelectedSubDistrict(id);
            onChange?.(id);
          }}
        >
          <SelectTrigger className="w-[180px] bg-[#BBDCFC] m-3">
            <SelectValue placeholder="Select Sub-District" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {subDistrictsData?.data?.map((item) => (
                <SelectItem key={item.id.toString()} value={item.id.toString()}>
                  {item.nameTh}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end ">
        <Button className="bg-blue-400"> Submit</Button>
      </div>
    </div>
  );
};
