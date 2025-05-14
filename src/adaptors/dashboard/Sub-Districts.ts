import { ISubDistricrtsItem, SubDistricrtsItem } from "@/interface/data";

export class DataItem implements SubDistricrtsItem {
  id = 0;
  zipCode = 0;
  nameTh = "";
  nameEn = "";
  amphureId = 0;
}

export class SubDistrictsName implements ISubDistricrtsItem {
  data: SubDistricrtsItem[] = [];
}
