import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { Sorteador } from "./Sorteador"


export const Exercicio14 = () => {
    return(
        <Card title="Exercício #14 - Números mega-sena caso 2">
            <Paragraph>
                A quantidade de números a ser
                sorteada é defidina
                pelo usuário.
            </Paragraph>

            <Sorteador />
        </Card>
    )
}