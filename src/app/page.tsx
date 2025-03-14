import { useGetDashboard } from "@/api/dashboard";
import Map from "@/components/map";

export default async function Dashboard() {
  const data = await useGetDashboard();
  return (
    <div className="bg-[#f0edeb]">
        <div className="flex ">
        <Map />
        <div className="grid grid-cols-2 mt-5">
        
        <div className="w-[15vw] h-[30vh] bg-gradient-to-r from-[#add8f0] to-[#e9d1d3] m-3 border-[2px] border-[#a09c93] shadow-lg rounded-xl">
        <div className="text-[20px] text-black flex justify-center">Air Quality</div>
          <div className="m-3 flex justify-between">
            <div>Carbon Dioxide (CO<sub>2</sub>)</div>
            <div className="texblack">20.9</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>Oxygen (O<sub>2</sub>)</div>
            <div className="text-black">420.7</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>PM1</div>
            <div className="text-black">4.7</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>PM2.5</div>
            <div className="text-black">34.0</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>PM10</div>
            <div className="text-black">57.4</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>PM10 (another)</div>  
            <div className="text-black">14.5</div>
          </div>
        </div>

        <div className="w-[15vw] h-[30vh] bg-gradient-to-r from-[#add8f0] to-[#e9d1d3] m-3 border-[2px] border-[#a09c93] shadow-lg rounded-xl">
          <div className="text-[20px] text-black flex justify-center">Environment</div>

          <div className="m-3 flex justify-between">
            <div>Altitude</div>
            <div>40.5</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>Humidity</div>
            <div>22.7</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>Pressure</div>
            <div>1018.1</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>Temperature</div>
            <div>10.7</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>Ultraviolet (UV)</div>
            <div>29.1</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>Sound Level</div>
            <div>33.3</div>
          </div>
        </div>

        <div className="w-[15vw] h-[22vh] bg-gradient-to-r from-[#add8f0] to-[#e9d1d3] m-3 border-[2px] border-[#a09c93] shadow-lg rounded-xl">
          <div className="text-[20px] text-black flex justify-center">Gas</div>
          
          <div className="m-3 flex justify-between">
            <div>Carbon Monoxide (CO)</div>
            <div>8.11</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>Ammonia (NH<sub>3</sub>)</div>
            <div>0.016</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>Nitrogen Dioxide (NO<sub>2</sub>)</div>
            <div>0.016</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>Sulfur Dioxide (SO<sub>2</sub>)</div>
            <div>0.016</div>
          </div>
        </div>

          
        <div className="w-[15vw] h-[18vh] bg-gradient-to-r from-[#add8f0] to-[#e9d1d3] m-3 border-[2px] border-[#a09c93] shadow-lg rounded-xl">
          <div className="text-[20px] text-black flex justify-center">Weather</div>
          
          <div className="m-3 flex justify-between">
            <div>Direct</div>
            <div>5</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>Rain</div>
            <div>1.7</div>
          </div>
          
          <div className="m-3 flex justify-between">
            <div>Speed</div>
            <div>6.5</div>
          </div>
        </div>


        </div>
      </div>
    </div>
    
  );
}
