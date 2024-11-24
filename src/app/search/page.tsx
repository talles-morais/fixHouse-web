import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import Header from "@/components/Header";
import ServiceProCard from "@/components/ServiceProCard";
import ServicesList from "@/components/ServicesList/page";

export default function search() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-5 pb-20 pt-10 sm:pt-0">
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
      <ServicesList />
    </div>
  );
}
