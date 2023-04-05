import { Paragraph, Span } from "../../../styles/Text"
import { Card } from "../../Card"
import { RequisicaoAPI } from "./RequisicaoAPI"


export const Exercicio19 = () => {
    return(
        <Card title="Exercício #19 - Ferramenta de busca">
            <Paragraph>
                Agora é sua vez! Escreva o nome de um
                pokemon para ser mostrado abaixo.
            </Paragraph>

            <RequisicaoAPI />
        </Card>
    )
}