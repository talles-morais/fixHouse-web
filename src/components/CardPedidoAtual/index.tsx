import next from "next";
import Image from "next/image";

export default function CardPedidoAtual(){
    return(
        <div className="bg-light-blue shadow-xl shadow-slate-700 py-7 px-10 w-3/4 rounded-2xl text-dark-blue">
            <div className="flex  justify-between ">
                <h3 className="text-2xl">Nome do prestador de serviço</h3>
                <button className="bg-red-800 text-white px-2 py-1 rounded-lg"> cancelar pedido</button>
            </div>

            <div className="bg-white flex flex-col py-8 rounded-lg">
                <span>Titulo: Limpeza residencial</span>
                <span>Descrição: limpeza residencial casa 3 quartos</span>
            </div>
            <div className="flex">
                <Image
                        width={30}
                        height={30}
                        alt="calendario"
                        src={"/icons/calendar.svg"}
                        
                        />
                        <span>22/10/2024</span>
            </div>
            <div className="flex">
                <Image
                    width={30}
                    height={30}
                    alt="casa"
                    src={"/icons/home.svg"}
                    
                    />
                    <span>Rua Primavera, 788, Itajubá - Centro / MG</span>
            </div>
            <div className="flex ">
                <Image
                width={30}
                height={30}
                alt="dinheiro"
                src={"/icons/money.svg"}
                
                />
                <span>R$150,00</span>
            </div>
            <button id="status-pedido" className="bg-green-800 text-white px-2 py-1 rounded-lg"> cancelar pedido</button>

        </div>
    )
}