import Image from "next/image";

export default function ServiceCard() {
  return (
    <div className="bg-dark-blue py-4 px-2 text-white flex flex-col justify-center items-center rounded-lg drop-shadow-md">
      <Image 
        height={35}
        width={35}
        src={"/icons/clean.svg"}
        alt="Ícone de aspirador de pó"
      />
      <span className="max-w-[50%] text-center text-[10px]">Limpeza Residencial</span>
    </div>
  )
}