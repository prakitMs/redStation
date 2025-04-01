export type MENUS = {
  label: string;
  link?: string;
  hasSub?: boolean;
  subMenu?: {
    label: string;
    link: string;
  }[];
};
