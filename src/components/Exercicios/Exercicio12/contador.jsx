import { useState } from "react"
import { Button } from "../../../styles/Button"
import { ContainerContador } from "../../../styles/ContainerContador"
import { Span } from "../../../styles/Text"
import { Passo } from "./passo"

export const Contador = () => {
    const [numero, setNumero] = useState(0)
    const [passo, setPasso] = useState(1)

    const aumentarNumero = () => {
        setNumero(numero+passo)
    }

    const diminuirNumero = () => {
        setNumero(numero-passo)
    }

    const zerarNumero = () => {
        setNumero(0)
    }

    return(
        <>
            <ContainerContador>
                <Span>Valor: </Span>
                <Button onClick={diminuirNumero}>-</Button>
                <Span>{numero}</Span>
                <Button onClick={aumentarNumero}>+</Button>
                <Button onClick={zerarNumero}>Zerar valor</Button>
            </ContainerContador>


            <ContainerContador>
                <Passo passo={passo} setPasso={setPasso} 
                    id="passo" 
                    type="number" 
                    title="Passo:"
                />
            </ContainerContador>
        </>
    )
}