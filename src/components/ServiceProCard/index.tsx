import Image from "next/image";

export default function ServiceCard() {
  return (
    <div className="bg-light-blue py-4 px-2 text-white flex flex-col justify-center items-center rounded-lg drop-shadow-md ">
      <div className="rounded-full w-fit">
        <Image
          height={150}
          width={150}
          src={"/img/eletricista.jpg"}
          alt="foto do profissional"
          className="rounded-full "
        />
      </div>
      <div>

      </div>
      <div>
        <h3 className="text-dark-blue">Fulano de tal</h3>

      </div>
        <button className="bg-yellow-500 rounded-md px-6 py-1">fazer proposta</button>
      </div>
  )
}