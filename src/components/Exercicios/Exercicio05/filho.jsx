import { Span } from "../../../styles/Text"

export const Filho = ({ sabor, children }) => {
    return(
        <Span>{children} de <strong>{sabor}</strong></Span>
    )
}