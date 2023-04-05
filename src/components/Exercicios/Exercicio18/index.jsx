import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { RequisicaoAPI } from "./RequisicaoAPI"


export const Exercicio18 = () => {
    return(
        <Card title="Exercício #18 - Requisição de API">
            <Paragraph>
                Podemos usar <strong>useEffect</strong> para
                fazer requisições de API. Nesse exemplo,
                buscamos informações do pokemon Sylveon.
            </Paragraph>

            <RequisicaoAPI />
        </Card>
    )
}