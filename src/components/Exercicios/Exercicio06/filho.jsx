import { Span } from "../../../styles/Text"

export const Filho = ({ sabor, tamanho, children }) => {
    return(
        <Span>{children} <strong>{tamanho}</strong> de <strong>{sabor}</strong></Span>
    )
}