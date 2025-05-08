import { IDataItems, RawDataItem } from "@/interface/data";
import { Expose } from "class-transformer";
import camelcaseKeys from "camelcase-keys";
import { allowKey } from "@/constant/dashboard";
import { MapProps } from "@/components/map/Map";

export class DataItem implements RawDataItem {
  field = "";
  measurement = "";
  result = "";
  start = "";
  stop = "";
  table = "";
  time = "";
  value = 0;
}

export class Dashboard implements IDataItems {
  data: DataItem[] = [];

  @Expose({ toClassOnly: true })
  get valueByKey() {
    const formatData = this.data?.reduce<Record<string, number>>(
      (resultMap, { field, value }) => {
        return { ...resultMap, [field]: value };
      },
      {}
    );
    return camelcaseKeys(formatData, { deep: true });
  }

  @Expose({ toClassOnly: true })
  get mapData(): MapProps {
    return {
      latitude: this.valueByKey?.latitude,
      longitude: this.valueByKey?.longitude,
      pm25: this.valueByKey?.pm25,
      pm10: this.valueByKey?.pm10,
      pm100: this.valueByKey?.pm100,
      o2: this.valueByKey?.o2,
      co2: this.valueByKey?.co2,
    };
  }

  @Expose({ toClassOnly: true })
  get airQuantity() {
    return {
      title: "Air Quantity",
      data: allowKey.airQuantity.map((key) => ({
        label: key,
        value: this.valueByKey?.[key],
      })),
    };
  }

  @Expose({ toClassOnly: true })
  get environment() {
    return {
      title: "Environment",
      data: allowKey.environment.map((key) => ({
        label: key,
        value: this.valueByKey?.[key],
      })),
    };
  }

  @Expose({ toClassOnly: true })
  get gas() {
    return {
      title: "Gas",
      data: allowKey.gas.map((key) => ({
        label: key,
        value: this.valueByKey?.[key],
      })),
    };
  }

  @Expose({ toClassOnly: true })
  get weather() {
    return {
      title: "Weather",
      data: allowKey.weather.map((key) => ({
        label: key,
        value: this.valueByKey?.[key],
      })),
    };
  }

  @Expose({ toClassOnly: true })
  get formatMapData() {
    const mapData = this.data?.reduce<Record<string, string | number>[]>(
      (resultMap, { field, value, measurement }) => {
        const findSameData = resultMap.find(
          (resultData) => resultData?.name === measurement
        );

        if (!findSameData) {
          return [
            ...resultMap,
            {
              name: measurement,
              [field]: value,
            },
          ];
        }

        const updateResult = resultMap.filter(
          (resultData) => resultData?.name !== measurement
        );

        return [...updateResult, { ...findSameData, [field]: value }];
      },
      []
    );
    return camelcaseKeys(mapData, { deep: true });
  }
}
