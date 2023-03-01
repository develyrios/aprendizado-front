import { Span } from "../../../styles/Text"
import { Filho } from "./filho"

export const Pai = () => {
    function gerarValorAleatorio(valorGerado) {
        console.log(valorGerado);
    }

    return(
        <>
        <Span>Valor gerado (no console)</Span>
        <Filho quandoClicar={gerarValorAleatorio} />
        </>
    )
}