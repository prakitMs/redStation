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
  const position1: [number, number] = [13.7563, 100.5018]; 
  const position2: [number, number] = [13.6553, 100.5018];


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
    <div className="w-[70vw] h-[40vw] flex justify-center items-center rounded-2xl shadow-lg overflow-hidden mt-10 ml-5">
      <MapContainer center={position1} zoom={10} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position1} icon={numberMarker(10)}>
          <Popup>
            <div className="text-center">
              <strong>จุดที่ 1</strong>
              <p>กรุงเทพมหานคร</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={position2} icon={numberMarker(20)}>
          <Popup>
            <div className="text-center">
              <strong>จุดที่ 2</strong>
              <p>กรุงเทพมหานคร</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
