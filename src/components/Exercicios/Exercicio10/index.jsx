import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { Input } from "./Input"


export const Exercicio10 = () => {
    return(
        <Card title="Exercício #10 - Controlled Component">
            <Paragraph>
                Entretanto, é fortemente recomendado
                o uso de estado em input para controlar o que
                é passado pro componente a cada caractere
                digitado. Fazemos isso com <strong>useState</strong>.
            </Paragraph>

            <Input id="cor" 
                type="text" 
                title="Que cor você mais gosta?"
                placeholder="Cor favorita"
            />
        </Card>
    )
}