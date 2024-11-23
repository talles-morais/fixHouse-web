import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function login() {

  return (
    <div className="bg-light-blue h-screen flex flex-col justify-center items-center gap-12">
      <Image 
        width={110}
        height={80}
        src="/logo.svg"
        alt="Logo do FixHouse"
      />
      <p className="text-dark-blue text-lg -m-10">Cliente</p>

      <LoginForm />

      <div>
        <div className="text-xs flex">
          <p>Não possui uma conta?</p>
          <Link className="font-bold" href={"/register"}>Cadastre-se</Link>
        </div>
        <div className="text-xs flex">
          <p>É profissional?</p>
          <Link className="font-bold" href={"/login-pro"}>Entre aqui</Link>
        </div>
      </div>
    </div>
  )
}