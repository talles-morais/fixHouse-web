"use client"
import api from "@/services/api"
import { UserRegisterPro } from "@/utils/types/user"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as yup from "yup"

const userSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório"),
  email: yup
    .string()
    .email()
    .required("Campo obrigatório"),
  specialty: yup
    .string()
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(4, "Sua senha deve ter, no mínimo, 4 caracteres")
    .required("Campo obrigatório"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "As senhas devem coincidir")
})

export default function RegisterFormPro() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<UserRegisterPro>({
    mode: "onSubmit",
    resolver: yupResolver<UserRegisterPro>(userSchema)
  })

  const onSubmit = async (data: UserRegisterPro) => {
    try {
      const response = await api.post("/client", data)
      console.log(response.data);
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
      <label className="text-dark-blue text-[14px]" htmlFor="email">Nome</label>
      <input {...register("name")} className="placeholder:text-dark-blue rounded-lg py-2 px-3 text-xs -mt-2" type="text" placeholder="Digite seu nome" />

      <label className="text-dark-blue text-[14px]" htmlFor="email">Email</label>
      <input {...register("email")} className="placeholder:text-dark-blue rounded-lg py-2 px-3 text-xs -mt-2" type="email" placeholder="Digite seu email" />

      <label className="text-dark-blue text-[14px]" htmlFor="email">Especialização</label>
      <input {...register("specialty")} className="placeholder:text-dark-blue rounded-lg py-2 px-3 text-xs -mt-2" type="email" placeholder="Exemplo: babá" />

      <label className="text-dark-blue text-[14px]" htmlFor="password">Senha</label>
      <input {...register("password")} className="placeholder:text-dark-blue rounded-lg py-2 px-3 text-xs -mt-2" type="password" placeholder="Digite sua senha" />

      <label className="text-dark-blue text-[14px]" htmlFor="confirmPassword">Confirmar senha</label>
      <input {...register("confirmPassword")} className="placeholder:text-dark-blue rounded-lg py-2 px-3 text-xs -mt-2" type="password" placeholder="Confirme sua senha" />

      <button className="bg-light-yellow rounded-lg self-center w-fit py-1.5 px-7 font-bold drop-shadow-md" type="submit" >Entrar</button>
    </form>
  )
}