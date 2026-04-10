"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useRef } from "react";

// Coordenadas: 3°27'34.6"N 76°31'59.0"W
const LAT = 3.45961;
const LNG = -76.53306;

export function MapLeaflet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const svgIcon = L.divIcon({
      html: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="red" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
      className: "",
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -38],
    });

    const map = L.map(containerRef.current, {
      center: [LAT, LNG],
      zoom: 17,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    L.marker([LAT, LNG], { icon: svgIcon })
      .addTo(map)
      .bindPopup(
        "<strong>VitaNova IPS</strong><br/>Av. 8N #15AN-31, Barrio Granada<br/>Cali, Valle del Cauca"
      )
      .openPopup();

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: "420px", width: "100%" }}
      className="rounded-2xl overflow-hidden border border-white/65 shadow-md z-0"
    />
  );
}
