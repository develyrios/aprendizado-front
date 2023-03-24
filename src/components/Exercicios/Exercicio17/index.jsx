import { Button } from "../../../styles/Button"
import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"


export const Exercicio17 = ({ setMostrarModal }) => {
    return(
        <Card title="Exercício #17 - Modal pop-up na página">
            <Paragraph>
                O <strong>useEffect</strong> também pode ser
                usado para gerenciar eventos. Assim, podemos
                construir um modal que aparece como pop-up
                na aplicação e é fechado caso haja um clique
                fora dele.
            </Paragraph>

            <Button onClick={() => setMostrarModal(true)}>Abrir modal</Button>
        </Card>
    )
}