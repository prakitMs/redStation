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

export interface ProvincesItem {
  id: number;
  nameTh: string;
  nameEn: string;
  geographyId: number;
}
export interface IProvincesItem {
  data: ProvincesItem[];
}

export interface RegionItem {
  id: number;
  nameThai: string;
  nameEn: string;
}

export interface IRegionItem {
  data: RegionItem[];
}

export interface DistrictsItem {
  id: number;
  nameTh: string;
  nameEn: string;
  provinceId: number;
}
export interface IDistrictsItem {
  data: DistrictsItem[];
}

export interface SubDistricrtsItem {
  id: number;
  zipCode: number;
  nameTh: string;
  nameEn: string;
  amphureId: number;
}

export interface ISubDistricrtsItem {
  data: SubDistricrtsItem[];
}
