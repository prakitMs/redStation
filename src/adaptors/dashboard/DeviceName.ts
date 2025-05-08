import { DeviceNameItem, IDeviceNameItem } from "@/interface/data";
import { Expose } from "class-transformer";

export class DataItem implements DeviceNameItem {
  result = "";
  table = 0;
  value = "";
}

export class DeviceName implements IDeviceNameItem {
  data: DataItem[] = [];

  @Expose({ toClassOnly: true })
  get deviceName() {
    return this.data?.map(({ value }) => value);
  }
}
