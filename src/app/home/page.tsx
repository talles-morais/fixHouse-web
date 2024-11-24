import PopularServices from "@/components/PopularServices";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import { AddressMap } from "@/services/map";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-5 pt-10 pb-20">
      <Image 
        width={20}
        height={30}
        src={"/logo_solo.svg"}
        alt="Logo do FixHouse"
      />
      <h1 className="text-xl text-dark-blue font-semibold" >Olá, Giovanna</h1>

      <SearchInput />
      <PopularServices />
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
            <p className="text-[10px] text-left">Nossa equipe de suporte está pronta para ajudar você a resolver qualquer questão de forma rápida e eficiente.</p>
          </div>
        </div>
      </button>
    </div>
  )
}