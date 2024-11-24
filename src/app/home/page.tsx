import PopularServices from "@/components/PopularServices";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import { AddressMap } from "@/services/map";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-5 pb-20 pt-10 sm:pt-0">
      <div className="w-full hidden sm:block">
        <Header />
      </div>
      <div className="sm:hidden">
        <Image
          width={20}
          height={30}
          src={"/logo_solo.svg"}
          alt="Logo do FixHouse"
        />
      </div>
      <h1 className="text-xl text-dark-blue font-semibold">Olá, Giovanna</h1>

      <SearchInput />
      <PopularServices />
      <div className="flex justify-around w-full">
        <h2 className="text-dark-blue text-xl">Seu endereço</h2>

        <button className=" bg-dark-blue rounded-lg py-1.5 px-2.5">
          <Image
            width={20}
            height={30}
            src={"/icons/edit_pencil.svg"}
            alt="Logo do FixHouse"
          />
        </button>
      </div>
      <AddressMap />
      <button className="bg-dark-blue py-4 px-6 text-white max-w-[264px] rounded-lg">
        <div className="flex gap-7 ">
          <Image
            width={44}
            height={44}
            src={"/icons/sac.svg"}
            alt="Ícone de atendente/suporte"
          />

          <div className="flex flex-col ">
            <h2 className="text-sm font-bold text-left">Suporte ao cliente</h2>
            <p className="text-[10px] text-left">
              Nossa equipe de suporte está pronta para ajudar você a resolver
              qualquer questão de forma rápida e eficiente.
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
