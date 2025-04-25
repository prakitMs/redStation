import {
  formatDateToThai,
  formatDateToThaiHour,
} from "@/components/utils/format";
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

export class Table implements IDataItems {
  data: DataItem[] = [];

  @Expose({ toClassOnly: true })
  get dataTableFetch() {
    return this.data?.reduce<{ time: string; value: number }[]>(
      (resultMap, { result, value, time }) => {
        if (result !== "hourly_mean") return resultMap;
        return [
          ...resultMap,
          { time: formatDateToThai(time), value: Number(value.toFixed(2)) },
        ];
      },
      []
    );
  }
}
