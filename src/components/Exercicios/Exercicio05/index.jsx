import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { Pai } from "./Pai"


export const Exercicio05 = () => {
    return(
        <Card title="Exercício #5 - Comunicação direta caso 1">
            <Paragraph>
                É a passagem de informações de pai para filho através de props.
                Nesse caso, definimos diretamente a props no momento que usamos
                o componente filho.
            </Paragraph>

            <Pai />
        </Card>
    )
}