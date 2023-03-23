import { Filho } from "./Filho"

export const Pai = (props) => {
    return(
        <>
        <Filho {...props}>Pizza</Filho>
        <Filho tamanho={props.tamanho} sabor={props.sabor}>Coxinha</Filho>
        <Filho tamanho="pequena" sabor="calabresa">Empada</Filho>
        </>
    )
}