import CardPedidoAtual from "@/components/CardPedidoAtual";
import next from "next";

export default function pedidoscliente(){
    return(
        <>
            <div>
                <h2 className="text-dark-blue text-4xl">Olá Giovanna, veja seus pedidos atuais</h2>
                <CardPedidoAtual/>
            </div>
            <div className="bg-dark-blue text-white text-4xl">
                <h2>Histórico de Pedidos</h2>
            </div>
        </>
    )
}