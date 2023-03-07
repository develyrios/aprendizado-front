import { useState } from "react"
import { Button } from "../../../styles/Button"
import { ContainerContador } from "../../../styles/ContainerContador"
import { Span } from "../../../styles/Text"
import { Passe } from "./passe"

export const Contador = () => {
    const [numero, setNumero] = useState(0)
    const [passe, setPasse] = useState(1)

    const aumentarNumero = () => {
        setNumero(numero+passe)
    }

    const diminuirNumero = () => {
        setNumero(numero-passe)
    }

    return(
        <>
            <ContainerContador>
                <Span>Valor: </Span>
                <Button onClick={aumentarNumero}>+</Button>
                <Span>{numero}</Span>
                <Button onClick={diminuirNumero}>-</Button>
            </ContainerContador>

            <ContainerContador>
                <Passe passe={passe} setPasse={setPasse} 
                    id="passe" 
                    type="number" 
                    title="Passe:"
                />
            </ContainerContador>
        </>
    )
}