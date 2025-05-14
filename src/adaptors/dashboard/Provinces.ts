import { IProvincesItem, ProvincesItem } from "@/interface/data";

export class DataItem implements ProvincesItem {
  id = 0;
  nameTh = "";
  nameEn = "";
  geographyId = 0;
}

export class ProvinceName implements IProvincesItem {
  data: ProvincesItem[] = [];
}
