import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { Input } from "./input"


export const Exercicio09 = () => {
    return(
        <Card title="Exercício #9 - Input">
            <Paragraph>
                No react podemos construir inputs,
                assim como no HTML. Também podemos usar
                props para deixá-lo dinâmico.
                
            </Paragraph>

            <Input id="fruta" 
                type="text" 
                title="Qual sua fruta favorita?" 
                placeholder="Fruta favorita" 
            />

            <Input id="idade" 
                type="number" 
                title="Qual sua idade?" 
                placeholder="Idade" 
            />
        </Card>
    )
}