import { DistrictsItem, IDistrictsItem } from "@/interface/data";

export class DataItem implements DistrictsItem {
  id = 0;
  nameTh = "";
  nameEn = "";
  provinceId = 0;
}

export class DistrictsName implements IDistrictsItem {
  data: DistrictsItem[] = [];
}
