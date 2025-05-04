import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TimeIntervalSelectionProps {
  onChange?: (timeInterval: string) => void;
}
export const TimeIntervalSelection = ({
  onChange,
}: TimeIntervalSelectionProps) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px] bg-slate-400">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Time Interval</SelectLabel>
          <SelectItem value="1m">1 Minute</SelectItem>
          <SelectItem value="30m">30 Minute</SelectItem>
          <SelectItem value="1h">1 Hour</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
