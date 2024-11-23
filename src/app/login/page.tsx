import LoginForm from "@/components/LoginForm";
import Image from "next/image";

export default function login() {
  return (
    <div className="bg-light-blue h-screen flex flex-col justify-center items-center">
      <Image 
        width={110}
        height={80}
        src="/logo.svg"
        alt="Logo do FixHouse"
      />
      <LoginForm />
    </div>
  )
}