"use client";
import { useEffect, useState } from "react";
import ServiceProCard from "../ServiceProCard";
import api from "@/services/api";
import ServiceModal from "../ServiceModal";

interface IServiceProCard {
  id: string,
  name: string;
  specialty: string;
}

export default function ServicesList() {
  const [professionals, setProfessionals] = useState<IServiceProCard[]>([]);
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [selectedProfessional, setSelectedProfessional] = useState<IServiceProCard | null>(null);

  useEffect(() => {
    const fetchPros = async () => {
      try {
        const response = await api.get<IServiceProCard[]>("/professionals");

        setProfessionals(response.data);
      } catch (error) {
        console.error("error fetching professionals", error);
      }
    };

    fetchPros();
  }, []);

  const handleOpenModal = (professional: IServiceProCard) => {
    setSelectedProfessional(professional)
    setIsModalOpen(true)
  }

  return (
    <div className="relative">
      <div className="flex flex-col justify-around w-full bg-dark-blue py-12 px-24 gap-8">
        <h2 className="text-white text-center font-bold text-4xl">
          Melhores resultados em sua localização
        </h2>
        {professionals.map((professional, index) => (
          <ServiceProCard
            key={index}
            id={professional.id}
            name={professional.name}
            specialty={professional.specialty}
            onCardClick={() => handleOpenModal(professional)}
          />
        ))}
      </div>

      {isModalOpen && selectedProfessional && (
        <ServiceModal 
          professional={selectedProfessional}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
