import { IDataItems, RawDataItem } from "@/interface/data";
import { Expose } from "class-transformer";
import { formatDateToThaiHour } from "@/components/utils/format";

export class DataItem implements RawDataItem {
  field = "";
  measurement = "";
  result = "";
  start = "";
  time = "";
  table = "";
  value = 0;
}

export class PM implements IDataItems {
  data: DataItem[] = [];

  @Expose({ toClassOnly: true })
  get dataPM1() {
    return this.data?.reduce<{ time: string; value: number }[]>(
      (resultMap, { result, value, time, field }) => {
        if (result === "hourly_mean" && field === "PM1") {
          return [
            ...resultMap,
            {
              time: formatDateToThaiHour(time),
              value: Number(value.toFixed(2)),
            },
          ];
        }
        return resultMap;
      },
      []
    );
  }

  @Expose({ toClassOnly: true })
  get dataPM25() {
    return this.data?.reduce<{ time: string; value: number }[]>(
      (resultMap, { result, value, time, field }) => {
        if (result === "hourly_mean" && field === "PM25") {
          return [
            ...resultMap,
            {
              time: formatDateToThaiHour(time),
              value: Number(value.toFixed(2)),
            },
          ];
        }
        return resultMap;
      },
      []
    );
  }
  @Expose({ toClassOnly: true })
  get dataPM10() {
    return this.data?.reduce<{ time: string; value: number }[]>(
      (resultMap, { result, value, time, field }) => {
        if (result === "hourly_mean" && field === "PM10") {
          return [
            ...resultMap,
            {
              time: formatDateToThaiHour(time),
              value: Number(value.toFixed(2)),
            },
          ];
        }
        return resultMap;
      },
      []
    );
  }
  @Expose({ toClassOnly: true })
  get dataPM100() {
    return this.data?.reduce<{ time: string; value: number }[]>(
      (resultMap, { result, value, time, field }) => {
        if (result === "hourly_mean" && field === "PM100") {
          return [
            ...resultMap,
            {
              time: formatDateToThaiHour(time),
              value: Number(value.toFixed(2)),
            },
          ];
        }
        return resultMap;
      },
      []
    );
  }

  @Expose({ toClassOnly: true })
  get tableData() {
    return this.data?.reduce<Record<string, string | number>[]>(
      (resultMap, { result, value, time, field }) => {
        if (result !== "hourly_mean") return resultMap;
        const formatTime = formatDateToThaiHour(time);
        const findSameTime = resultMap?.find(
          (data) => data.time === formatTime
        );
        const updateData = resultMap?.filter(
          (data) => data.time !== formatTime
        );

        return [
          ...updateData,
          {
            ...findSameTime,
            time: formatTime,
            [field]: Number(value.toFixed(2)),
          },
        ];
      },
      []
    );
  }

  @Expose({ toClassOnly: true })
  get summary() {
    return this.data?.reduce<{
      [x: string]: {
        [x: string]: { value: number; time: string };
      };
    }>((resultMap, { result, value, field, time }) => {
      if (result === "hourly_mean") return resultMap;
      const defaultResult = resultMap?.[field as keyof typeof resultMap] ?? {};
      resultMap[field as keyof typeof resultMap] = {
        ...defaultResult,
        [result]: {
          value,
          time,
        },
      };
      return resultMap;
    }, {});
  }
}
