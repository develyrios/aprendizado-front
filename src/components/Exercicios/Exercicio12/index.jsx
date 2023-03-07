import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { Contador } from "./contador"


export const Exercicio12 = () => {
    return(
        <Card title="Exercício #12 - Contador com passo">
            <Paragraph>
                Podemos usar os exemplos anteriores
                e construir um contador com passo que
                é definido por um input.
            </Paragraph>

            <Contador />
        </Card>
    )
}