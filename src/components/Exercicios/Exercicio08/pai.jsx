import { useState } from "react"
import { Span } from "../../../styles/Text"
import { Filho } from "./Filho"

export const Pai = () => {
    const [valor, setValor] = useState(0)

    function gerarValorAleatorio(valorGerado) {
        setValor(valorGerado);
    }

    return(
        <>
        <Span>Valor gerado: {valor}</Span>
        <Filho quandoClicar={gerarValorAleatorio} />
        </>
    )
}