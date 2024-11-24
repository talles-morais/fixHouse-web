import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import Header from "@/components/Header";
import ServiceProCard from "@/components/ServiceProCard";

export default function Busca() {
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
      <div className="flex justify-around w-full bg-dark-blue">
        <h2 className="text-white text-4xl">Melhores resultados em sua localização</h2>
        <ServiceProCard/>
      </div>


    </div>
  );
}
