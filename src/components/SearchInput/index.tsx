import Image from "next/image"

export default function SearchInput() {
  return (
    <div className="bg-light-blue flex rounded-lg w-3/4 px-2">
      <input 
        className="bg-transparent placeholder:text-[10px] focus:outline-none text-sm flex-1 py-1.5" 
        type="search" 
        placeholder="O que você precisa hoje?" 
      />
      
      <Image 
        width={18}
        height={18}
        src={"/icons/search.svg"}
        alt="Icone de procurar"
      />
    </div>
  )
}