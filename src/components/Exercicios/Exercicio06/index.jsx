import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { Pai } from "./pai"


export const Exercicio06 = () => {
    return(
        <Card title="Exercício #6 - Comunicação direta caso 2">
            <Paragraph>
                O pai também consegue repassar as próprias props
                através do spread (que passa todas de uma vez) 
                ou da forma "tradicional" do exercício #1.
            </Paragraph>

            <Pai tamanho="grande" sabor="4 queijos" />
        </Card>
    )
}