import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { Modal } from "./Modal"


export const Exercicio15 = () => {
    return(
        <Card title="Exercício #15 - Modal dentro do componente">
            <Paragraph>
                É possível usar <strong>useState</strong> e
                renderização condicional para criar um modal.
            </Paragraph>

            <Modal />
        </Card>
    )
}