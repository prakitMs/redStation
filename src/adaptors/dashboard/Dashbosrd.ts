import { IDashboard } from "@/interface/dashboard";
import { AirQuality } from "./AirQuality";
import { Environment } from "./Environment";
import { Gas } from "./Gas";
import { Weather } from "./Weather";

export class Dashboard implements IDashboard{
    timestamp =  "";
    airQuality = new AirQuality();
    environment = new Environment();
    gas = new Gas();
    weather= new Weather();
}
