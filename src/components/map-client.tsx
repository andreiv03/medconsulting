"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import GoogleMapReact from "google-map-react";

import styles from "@/styles/pages/hospitals.module.scss";

type MarkerProps = {
  lat: number;
  lng: number;
  className?: string | undefined;
  children?: React.ReactNode;
};

function Marker({ className = "", children }: MarkerProps) {
  return <div className={className}>{children}</div>;
}

export default function MapClient({ coordinates }: { coordinates: { lat: number; lng: number } }) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env["NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"] as string }}
      center={coordinates}
      defaultCenter={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
    >
      <Marker className={styles["marker"]} lat={coordinates.lat} lng={coordinates.lng}>
        <FaMapMarkerAlt />
      </Marker>
    </GoogleMapReact>
  );
}
