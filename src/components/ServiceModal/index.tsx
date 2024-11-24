"use client"
import api from "@/services/api";
import { ServiceRequest } from "@/utils/types/service";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup"

const serviceSchema = yup.object().shape({
  value: yup
    .number()
    .required("Campo obrigatório"),
  name: yup
    .string()
    .required("Campo obrigatório"),
  description: yup
    .string()
    .required("Campo obrigatório"),
  date: yup
    .date()
    .required("Campo obrigatório")
})

interface IServiceProCard {
  id: string,
  name: string;
  specialty: string;
}

interface IModalProps {
  professional: IServiceProCard
  closeModal: () => void
}

export default function ServiceModal({ professional, closeModal }: IModalProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm<ServiceRequest>({
    mode: "onSubmit",
    resolver: yupResolver<ServiceRequest>(serviceSchema)
  })

  const onSubmit = async (data: ServiceRequest) => {
    const actualUser = localStorage.getItem("userId")

    const actualProfessional = localStorage.getItem("professionalId");

    if (!actualUser || !actualProfessional) {
      console.error("User or Professional ID is missing");
      return;
    }
    const request = {
      ...data,
      clientId: Number(actualUser),
      professionalId: Number(actualProfessional)
    }

    console.log(request);
    

    try {
      const response = await api.post("/service", request, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(response.data); 
    } catch (error) {
      console.error("error creating service", error)
    }
  }
  
  return (
    <div className="flex justify-center items-center fixed inset-0 z-50 bg-dark-blue bg-opacity-50 h-screen w-screen">
      <div className=" flex items-start gap-10 bg-white py-12 px-14 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col text-dark-blue ">
            <label htmlFor="value">Envie sua proposta:</label>
            <input
              type="number"
              id="value"
              placeholder="ex: R$ 200,00"
              {...register("value")}
              className="bg-light-blue rounded-lg py-1.5 px-4"
            />
          </div>
          <div className="flex flex-col text-dark-blue">
            <label htmlFor="name">Qual seria o serviço?</label>
            <input
              type="text"
              id="name"
              placeholder="ex: instalação elétrica"
              {...register("name")}
              className="bg-light-blue rounded-lg py-1.5 px-4"
            />
          </div>
          <div className="flex flex-col text-dark-blue">
            <label htmlFor="description">Adicione uma breve descrição?</label>
            <textarea
              id="description"
              placeholder="ex: instalação elétrica"
              {...register("description")}
              style={{
                resize: "none",
              }}
              className="bg-light-blue rounded-lg py-1.5 px-4"
            />
          </div>
          <div className="flex flex-col text-dark-blue">
            <label htmlFor="description">Qual seria a data?</label>
            <input
              type="date"
              id="description"
              placeholder="ex: instalação elétrica"
              {...register("date")}
              className="bg-light-blue rounded-lg py-1.5 px-4"
            />
          </div>

          <button 
            type="submit"
            className="self-end text-white rounded-lg bg-send-green py-1 px-3 w-fit hover:scale-105 transition-all drop-shadow-lg"
          >
            ENVIAR
          </button>
        </form>

        <Image
          src={"/icons/close.svg"}
          width={36}
          height={36}
          alt="Ícone para fechar o modal"
          className="w-4 -mr-4 cursor-pointer"
          onClick={closeModal}
        />
      </div>
    </div>
  );
}
