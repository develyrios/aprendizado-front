import { useState } from "react"
import { Button } from "../../../styles/Button"
import { Span } from "../../../styles/Text"
import { ContainerContador } from "../../../styles/ContainerContador"

export const ContadorComUseState = () => {
    const [numero, setNumero] = useState(0)

    const aumentarNumero = () => {
        setNumero(numero+1)
    }

    const diminuirNumero = () => {
        setNumero(numero-1)
    }

    return(
        <ContainerContador>
            <Span>Com useState: </Span>
            <Button onClick={diminuirNumero}>-</Button>
            <Span>{numero}</Span>
            <Button onClick={aumentarNumero}>+</Button>
        </ContainerContador>
    )
}