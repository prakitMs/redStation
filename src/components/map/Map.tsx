"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const Map = () => {
  const [leaflet, setLeaflet] = useState<any>(null);
  const position: [number, number] = [13.7563, 100.5018]; 


  useEffect(() => {
    import("leaflet").then((L) => {
      setLeaflet(L);
    });
  }, []);

  if (!leaflet) return <div>Loading map...</div>;

  const numberMarker = (num: number) =>
    leaflet.divIcon({
      className: "custom-marker",
      html: `<div class="marker-number">${num}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });

  return (
    <div className="w-[40vw] h-[35vw] flex justify-center items-center rounded-2xl shadow-lg overflow-hidden mt-10 ml-5">
      <MapContainer center={position} zoom={6} className="w-[50vw] h-[50vw]">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={numberMarker(10)}>
          <Popup>
            <div className="text-center">
              <strong>จุดที่ 1</strong>
              <p>กรุงเทพมหานคร</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
