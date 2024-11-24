import Image from "next/image"

export default function Header() {
  return (
    <header className="shadow-xl w-full h-10">
      <div className="flex justify-between pl-5 items-center h-full">
        <Image 
          width={20}
          height={30}
          src={"/logo_solo.svg"}
          alt="Logo do FixHouse"
        />

        <nav className="flex text-xs  h-full">
          <button className="h-full px-2 text-dark-blue hover:bg-dark-blue hover:text-white transition-all" >Início</button>
          <button className="h-full px-2 text-dark-blue hover:bg-dark-blue hover:text-white transition-all" >Meus pedidos</button>
          <button className="h-full px-2 text-dark-blue hover:bg-dark-blue hover:text-white transition-all" >Meu perfil</button>
        </nav>
      </div>
    </header>
  )
}