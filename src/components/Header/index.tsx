import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="shadow-xl w-full h-10">
      <div className="flex justify-between pl-5 h-full">
        <Image 
          width={20}
          height={30}
          src={"/logo_solo.svg"}
          alt="Logo do FixHouse"
        />

        <nav className="flex text-xs h-full">
          <Link href={"/home"} className="h-full px-2 text-dark-blue hover:bg-dark-blue hover:text-white transition-all flex items-center" >Início</Link>
          <Link href={"/search"} className="h-full px-2 text-dark-blue hover:bg-dark-blue hover:text-white transition-all flex items-center">Busca</Link>
          <Link href={"/my-orders"} className="h-full px-2 text-dark-blue hover:bg-dark-blue hover:text-white transition-all flex items-center">Meus pedidos</Link>
          <Link href={"/profile"} className="h-full px-2 text-dark-blue hover:bg-dark-blue hover:text-white transition-all flex items-center" >Meu perfil</Link>
        </nav>
      </div>
    </header>
  )
}