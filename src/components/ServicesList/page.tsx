"use client"
import { useEffect, useState } from "react";
import ServiceProCard from "../ServiceProCard";
import api from "@/services/api";

interface IServiceProCard {
  name: string;
  specialty: string;
}

export default function ServicesList() {
  const [professionals, setProfessionals] = useState<IServiceProCard[]>([]);

  useEffect(() => {
    const fetchPros = async () => {
      try {
        const response = await api.get<IServiceProCard[]>(
          "/professionals"
        );
        setProfessionals(response.data);
      } catch (error) {
        console.error("error fetching professionals", error);
      }
    };

    fetchPros();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-around w-full bg-dark-blue py-12 px-24 gap-8">
        <h2 className="text-white text-center font-bold text-4xl">
          Melhores resultados em sua localização
        </h2>
        { professionals.map((professional, index) => (
          <ServiceProCard 
            key={index}
            name={professional.name}
            specialty={professional.specialty}
          />
        )) }
        
      </div>
    </div>
  );
}
