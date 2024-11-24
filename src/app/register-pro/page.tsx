import RegisterForm from "@/components/RegisterForm";
import RegisterFormPro from "@/components/RegisterFormPro";
import Image from "next/image";
import Link from "next/link";

export default function registerpro() {

  return (
    <div className="bg-light-blue h-screen flex flex-col justify-center items-center gap-12">
      <Image 
        width={110}
        height={80}
        src="/logo.svg"
        alt="Logo do FixHouse"
      />
      <p className="text-dark-blue text-lg -m-10">Prestador de Serviços</p>

      <RegisterFormPro />

      <div>
        <div className="text-xs flex">
          <p>Já possui uma conta?</p>
          <Link className="font-bold" href={"/login"}>Cadastre-se</Link>
        </div>
        <div className="text-xs flex">
          <p>Cadastrar como profissional?</p>
          <Link className="font-bold" href={"/register-pro"}>Entre aqui</Link>
        </div>
      </div>
    </div>
  )
}