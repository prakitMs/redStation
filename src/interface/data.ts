export interface RawDataItem {
  measurement: string;
  start: string;
  result: string;
  field: string;
  value: number;
}

export interface IDataItems {
  data: RawDataItem[];
}
export interface DeviceNameItem {
  result: string;
  table: number;
  value: string;
}

export interface IDeviceNameItem {
  data: DeviceNameItem[];
}
