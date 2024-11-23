export default function LoginForm() {
  return (
    <form 
      className="flex flex-col"
    >
      <label className="text-[14px]" htmlFor="email">Email</label>
      <input className="rounded-lg py-2 px-3 text-xs" type="email" placeholder="Digite seu email"/>

      <label className="text-[14px]" htmlFor="password">Senha</label>
      <input className="rounded-lg py-2 px-3 text-xs" type="password" placeholder="Digite sua senha"/>

      <button type="submit" >Fazer login</button>
    </form>
  )
}