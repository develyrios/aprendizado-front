import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { EfeitoColateral } from "./EfeitoColateral"


export const Exercicio16 = () => {
    return(
        <Card title="Exercício #16 - useEffect">
            <Paragraph>
                O hook <strong>useEffect</strong> é usado para gerenciar
                efeitos colateriais. Eles acontecem sempre que o componente
                passa por uma renderização. Veja como o título da página
                se modifica de acordo com a alteração do valor abaixo.
            </Paragraph>

            <EfeitoColateral />
        </Card>
    )
}