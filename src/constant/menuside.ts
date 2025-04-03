import { FaTemperatureHigh } from "react-icons/fa";
import { PAGE_ROUTE } from "./routes";
import { MENUS } from "@/types/Menu";
import { MdCo2 } from "react-icons/md";
import { SiO2 } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";
import { AiFillSound } from "react-icons/ai";

export const SIDE_MENU: MENUS[] = [
  {
    label: "Air Quality",
    hasSub: true,
    subMenu: [
      {
        label: "Particulate Matter (PM)",
        icon: "pm.svg",
        link: PAGE_ROUTE.particulateMatter,
      },
      {
        label: "Carbon Dioxide",
        icon: MdCo2,
        link: PAGE_ROUTE.carbonDioxide,
      },
      {
        label: "Oxygen",
        icon: SiO2,
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
        icon: WiHumidity,
        link: PAGE_ROUTE.humidity,
      },
      {
        label: "Pressure",
        icon: "pressure.svg",
        link: PAGE_ROUTE.pressure,
      },
      {
        label: "Temperature",
        icon: FaTemperatureHigh,
        link: PAGE_ROUTE.temperature,
      },
      {
        label: "Ultraviolet(UV)",
        icon: "uv.svg",
        link: PAGE_ROUTE.uv,
      },
      {
        label: "Sound Level",
        icon: AiFillSound,
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
        icon: "co.svg",
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
