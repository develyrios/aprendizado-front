import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { ContadorComUseState } from "./contadorComUseState copy"
import { ContadorSemUseState } from "./contadorSemUseState"


export const Exercicio11 = () => {
    return(
        <Card title="Exercício #11 - Contador simples">
            <Paragraph>
                Mais um caso em que o useState é util
                para mostrar informações que se modificam.
            </Paragraph>

            <ContadorSemUseState />
            <ContadorComUseState />

        </Card>
    )
}