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
