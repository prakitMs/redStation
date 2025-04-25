import { formatDateToThaiHour } from "@/components/utils/format";
import { IDataItems, RawDataItem } from "@/interface/data";
import { Expose } from "class-transformer";

export class DataItem implements RawDataItem {
  field = "";
  measurement = "";
  result = "";
  start = "";
  time = "";
  table = "";
  value = 0;
}

export class Data implements IDataItems {
  data: DataItem[] = [];

  @Expose({ toClassOnly: true })
  get formatData() {
    return this.data?.reduce<{ time: string; value: number }[]>(
      (resultMap, { result, value, time }) => {
        if (result !== "hourly_mean") return resultMap;
        return [
          ...resultMap,
          { time: formatDateToThaiHour(time), value: Number(value.toFixed(2)) },
        ];
      },
      []
    );
  }

  @Expose({ toClassOnly: true })
  get summary() {
    return this.data?.reduce<Record<string, { time: string; value: number }>>(
      (resultMap, { result, value, time }) => {
        if (result === "hourly_mean")
          return {
            ...resultMap,
          };
        return { ...resultMap, [result]: { time: time, value } };
      },
      {}
    );
  }
}
