import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { RequisicaoAPI } from "./RequisicaoAPI"


export const Exercicio20 = () => {
    return(
        <Card title="Exercício #20 - Ferramenta de busca 2">
            <Paragraph>
                Dessa vez escreva o id (número) do
                pokemon para ser mostrado abaixo.
            </Paragraph>

            <RequisicaoAPI />
        </Card>
    )
}