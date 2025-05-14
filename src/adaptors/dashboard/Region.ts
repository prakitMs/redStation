import { IRegionItem, RegionItem } from "@/interface/data";

export class DataItem implements RegionItem {
  id = 0;
  nameThai = "";
  nameEn = "";
}

export class RegionName implements IRegionItem {
  data: RegionItem[] = [];
}
