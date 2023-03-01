import { Paragraph, Span } from "../../../styles/Text"
import { Card } from "../../Card"
import { If } from "./If"


export const Exercicio04 = (props) => {
    return(
        <Card title="Exercício #4 - Renderização condicional com IF">
            <Paragraph>
                Também é possível criar um componente independente
                que armazene uma condição. Nesse caso, o componente
                "If" só é renderizado se "teste" for "true".
            </Paragraph>
            
            <Paragraph>O número {props.numero} é</Paragraph>

            <If teste={props.numero % 2 === 0}>
                <Span>Par</Span>
            </If>

            <If teste={props.numero % 2 === 1}>
                <Span>Ímpar</Span>
            </If>
        </Card>
    )
}