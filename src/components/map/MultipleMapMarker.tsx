"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useState } from "react";
import MarkerLog from "../marker-log/MarkerLog";
import { getColorByValue } from "../utils/iconCondition";

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

export interface MultiMapProps {
  latitude: number;
  longitude: number;
  pm25: number;
  pm10: number;
  pm100: number;
  o2: number;
  co2: number;
  name?: string;
}

interface MultipleMapMarkerProps {
  data: MultiMapProps[];
}

export const MultipleMapMarker = ({ data }: MultipleMapMarkerProps) => {
  const defaultLocation = useMemo(() => {
    return data?.[0];
  }, [data]);

  const [leaflet, setLeaflet] = useState<any>(null);
  const [showLog, setShowLog] = useState<MultiMapProps>();
  const position1: [number, number] = [
    defaultLocation?.latitude,
    defaultLocation?.longitude,
  ];

  useEffect(() => {
    import("leaflet").then((L) => {
      setLeaflet(L);
    });
  }, []);
  if (!leaflet) return <div>Loading map...</div>;

  const renderMarker = (pmValue: number) => {
    return leaflet.divIcon({
      className: "rounded-full",
      html: `<div style="
            background-color: ${getColorByValue(pmValue)};
            color: black;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            width: 40px; 
            height: 40px;
            text-align: center;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          ">
          ${pmValue}
          </div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
  };
  const handleMarkerClick = (idx: number) => {
    setShowLog(data[idx]);
  };
  const handleCloseDetail = () => {
    setShowLog(undefined);
  };

  return (
    <div className="border-4 relative border-black lg:h-[80vh] lg:max-w-[100vw] max-w-[95vw] h-[80vh] md:min-h-[70vh] flex justify-center items-center rounded-2xl shadow-lg overflow-hidden  ml-5 mr-5 ">
      <MapContainer center={position1} zoom={5} className="w-full h-full z-10">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {data?.map((item, idx) => (
          <Marker
            key={`${item.latitude}-${item.longitude}-${idx}`}
            position={[item.latitude, item.longitude]}
            icon={renderMarker(item.pm25)}
            eventHandlers={{
              click: () => handleMarkerClick(idx),
            }}
          />
        ))}
      </MapContainer>

      {!!showLog && (
        <MarkerLog {...showLog} onClose={() => handleCloseDetail()} />
      )}
    </div>
  );
};
