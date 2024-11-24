"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

interface IServiceProCard {
  id: string,
  name: string,
  specialty: string,
  onCardClick: () => void
}

export default function ServiceProCard({ id, name, specialty, onCardClick }: IServiceProCard) {
  const handleCardClick = () => {
    localStorage.setItem("professionalId", id)
    onCardClick()
  }

  return (
    <div 
      className="flex flex-col sm:flex-row bg-light-blue py-4 px-6 text-white justify-center items-center rounded-lg drop-shadow-md gap-16"
    >
      <Image
        height={150}
        width={150}
        src={"/img/eletricista.jpg"}
        alt="foto do profissional"
        className="rounded-full w-32 h-32 object-cover drop-shadow-lg"
      />

      <div className=" flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-dark-blue font-bold">{name}</h3>
          <button 
            onClick={handleCardClick}
            className="bg-yellow-500 text-dark-blue font-bold rounded-md px-2 py-1"
          >
            fazer proposta
          </button>
        </div>

        <p className="text-dark-blue">
          Realizo serviços de {specialty}, como instalação, manutenção e
          reparos, com qualidade e segurança. Atendimento rápido e eficiente
          para resolver suas necessidades elétricas em casa.
        </p>
      </div>
    </div>
  );
}
