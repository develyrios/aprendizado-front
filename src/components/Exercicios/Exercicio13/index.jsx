import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { Sorteador } from "./sorteador"


export const Exercicio13 = () => {
    return(
        <Card title="Exercício #13 - Números mega-sena caso 1">
            <Paragraph>
                Sorteador simples que gera 6 números entre 1 e 60
                e exibe o resultado em ordem crescente.
            </Paragraph>

            <Sorteador />
        </Card>
    )
}