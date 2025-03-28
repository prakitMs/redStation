"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

interface MapProps {
  title: string;
  latitude: number;
  longitude: number;
  "pm2.5": number;
}

const Map = ({ latitude, longitude, ...props }: MapProps) => {
  const [leaflet, setLeaflet] = useState<any>(null);
  const position1: [number, number] = [latitude, longitude];

  // props["pm2.5"]
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
      iconSize: [40, 40],
      iconAnchor: [15, 30],
    });

  return (
    <div className="border-4 border-indigo-100 lg:max-w-[70vw] max-w-[95vw] h-[40vw] flex justify-center items-center rounded-2xl shadow-lg overflow-hidden mt-10 ml-5">
      <MapContainer center={position1} zoom={10} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position1} icon={numberMarker(props["pm2.5"])}>
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
