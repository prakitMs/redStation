import Ammonia from "@/app/ammonia/page";
import { PAGE_ROUTE } from "./routes";
import { MENUS } from "@/types/Menu";

export const SIDE_MENU: MENUS[] = [
  {
    label: "Air Quality",
    hasSub: true,
    subMenu: [
      {
        label: "Particulate Matter (PM)",
        link: PAGE_ROUTE.particulateMatter,
      },
      {
        label: "Carbon Dioxide",
        link: PAGE_ROUTE.carbonDioxide,
      },
      {
        label: "Oxygen",
        link: PAGE_ROUTE.oxygen,
      },
    ],
  },
  {
    label: "Environment",
    hasSub: true,
    subMenu: [
      {
        label: "Humidity",
        link: PAGE_ROUTE.humidity,
      },
      {
        label: "Pressure",
        link: PAGE_ROUTE.pressure,
      },
      {
        label: "Temperature",
        link: PAGE_ROUTE.temperature,
      },
      {
        label: "Ultraviolet(UV)",
        link: PAGE_ROUTE.uv,
      },
      {
        label: "Sound",
        link: PAGE_ROUTE.sound,
      },
    ],
  },
  {
    label: "Gas",
    hasSub: true,
    subMenu: [
      {
        label: "Carbon Monoxide",
        link: PAGE_ROUTE.carbonMonoxide,
      },
      {
        label: "Ammonia",
        link: PAGE_ROUTE.ammonia,
      },
      {
        label: "Nitrogen Dioxide",
        link: PAGE_ROUTE.nitrogenDioxide,
      },
      {
        label: "Sulfur Dioxide",
        link: PAGE_ROUTE.sulfurDioxide,
      },
    ],
  },
  {
    label: "Weather",
    hasSub: true,
    subMenu: [
      {
        label: "Wind Direction",
        link: PAGE_ROUTE.windDirection,
      },
      {
        label: "Wind Speed",
        link: PAGE_ROUTE.windSpeed,
      },
      {
        label: "Rainfall",
        link: PAGE_ROUTE.rainfall,
      },
    ],
  },
];
