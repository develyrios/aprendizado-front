import { useState } from "react";
import { useEffect } from "react"
import { Button } from "../../../styles/Button";
import { ContainerContador } from "../../../styles/ContainerContador";
import { Span } from "../../../styles/Text";

export const EfeitoColateral = () => {
    const[valor,setValor] = useState(+0)

    useEffect(() => {
        valor === 0 ?
        document.title = "Bev Verso"
        : document.title = `Valor: ${valor} | Bev Verso`
    },[valor]);

    return(
    <ContainerContador>
        <Button onClick={() => setValor(valor-1)}>-</Button>
        <Span>{valor}</Span>
        <Button onClick={() => setValor(valor+1)}>+</Button>
        <Button onClick={() => setValor(0)}>Zerar valor</Button>
    </ContainerContador>
    )
}