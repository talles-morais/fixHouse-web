import PopularServices from "@/components/PopularServices";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import GoogleMap from "@/services/map";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <Image 
        width={20}
        height={30}
        src={"/logo_solo.svg"}
        alt="Logo do FixHouse"
      />
      <h1 className="text-xl text-dark-blue font-semibold" >Olá, Giovanna</h1>

      <SearchInput />
      <PopularServices />
      <GoogleMap address="Itajubá " />

    </div>
  )
}