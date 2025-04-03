import { IconType } from "react-icons";

export type MENUS = {
  label: string;
  link?: string;
  hasSub?: boolean;
  subMenu?: {
    label: string;
    icon?: IconType | string;
    link: string;
  }[];
};
