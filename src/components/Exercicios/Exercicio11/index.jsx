import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { ContadorComUseState } from "./contadorComUseState copy"
import { ContadorSemUseState } from "./contadorSemUseState"


export const Exercicio11 = () => {
    return(
        <Card title="Exercício #11 - Contador simples">
            <Paragraph>
                Relembrando: para causar mudanças na interface
                no react, é necessário useState.
                Perceba a diferença no exemplo abaixo com contadores simples.
            </Paragraph>

            <ContadorSemUseState />
            <ContadorComUseState />

        </Card>
    )
}