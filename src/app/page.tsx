import { useGetDashboard } from "@/components/api/dashboard";
import Map from "@/components/map";
import TableAirQuality from "@/components/table-air-quality";
import TableEnviroment from "@/components/table-environment";
import TableGas from "@/components/table-gas";
import TableWeather from "@/components/table-weather";


export default async function Dashboard() {
  const data = await useGetDashboard();
  return(
      <div className="flex justify-center items-center"> 
        <Map/>
      <div className="grid grid-cols-2">
        <TableAirQuality/>
        <TableEnviroment/>
        <TableGas/>
        <TableWeather/>
      </div>
      </div>
  );
}
