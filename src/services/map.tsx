"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface GoogleMapProps {
  address: string;
}

function GoogleMap({ address }: GoogleMapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null); // Ref inicializada como HTMLDivElement | null
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      version: "weekly",
    });

    loader.load().then(() => {
      setIsApiLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!isApiLoaded || !mapRef.current) return; // Certifique-se de que o mapRef não é null

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
        const map = new google.maps.Map(mapRef.current as HTMLElement, {
          center: results[0].geometry.location,
          zoom: 8,
        });

        new google.maps.Marker({
          map,
          position: results[0].geometry.location,
        });
      } else {
        console.error(
          `Geocode was not successful for the following reason: ${status}`
        );
      }
    });
  }, [address, isApiLoaded]);

  return <div style={{ height: "400px" }} ref={mapRef} />;
}

export default GoogleMap;
