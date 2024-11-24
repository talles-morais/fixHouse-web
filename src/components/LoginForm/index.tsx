"use client"
import api from "@/services/api"
import { UserLogin } from "@/utils/types/user"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as yup from "yup"

const userSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(4, "Sua senha deve ter, no mínimo, 4 caracteres")
    .required("Campo obrigatório"),
})

export default function LoginForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<UserLogin>({
    mode: "onSubmit",
    resolver: yupResolver<UserLogin>(userSchema)
  })

  const onSubmit = async (data: UserLogin) => {
    try {
      const response = await api.post("/login", data)
      console.log(response.data)
      window.localStorage.setItem("userId", response.data.userId)
      if(response.status === 200) {
        router.push("/home")
      }
      reset()
    } catch (error) {
      console.error("error creating user", error)
    } 
  }

  return (
    <form 
      className="flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="text-dark-blue text-[14px]" htmlFor="email">Email</label>
      <input {...register("email")} className="placeholder:text-dark-blue rounded-lg py-2 px-3 text-xs -mt-2" type="email" placeholder="Digite seu email"/>

      <label className="text-dark-blue text-[14px]" htmlFor="password">Senha</label>
      <input {...register("password")} className="placeholder:text-dark-blue rounded-lg py-2 px-3 text-xs -mt-2" type="password" placeholder="Digite sua senha"/>

      <button className="bg-light-yellow rounded-lg self-center w-fit py-1.5 px-7 font-bold drop-shadow-md" type="submit" >Entrar</button>
    </form>
  )
}