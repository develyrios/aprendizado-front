import { Paragraph, Span } from "../../../styles/Text"
import { Card } from "../../Card"


export const Exercicio03 = (props) => {
    return(
        <Card title="Exercício #3 - Renderização condicional simplificada">
            <Paragraph>
                Quando uma renderização é condicional, ela só acontece
                se as condições forem satisfeitas.
            </Paragraph>
            
            <Paragraph>O número {props.numero} é</Paragraph>
            
            {
                props.numero % 2 === 0 ? 
                <Span>Par</Span>
                : <Span>Ímpar</Span>
            }
        </Card>
    )
}