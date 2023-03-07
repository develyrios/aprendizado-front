import { Button } from "../../../styles/Button"
import { Span } from "../../../styles/Text"
import { ContainerContador } from "../../../styles/ContainerContador"

export const ContadorSemUseState = () => {
    let numero = 0

    const aumentarNumero = () => {
        numero + 1
    }

    const diminuirNumero = () => {
        numero - 1
    }

    return(
        <ContainerContador>
            <Span>Sem useState: </Span>
            <Button onClick={aumentarNumero}>+</Button>
            <Span>{numero}</Span>
            <Button onClick={diminuirNumero}>-</Button>
        </ContainerContador>
    )
}