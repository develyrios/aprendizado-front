import { Card } from "../../Card"
import { Paragraph } from "../../../styles/Text"

export const Exercicio01 = () => {
    return (
        <Card title="Exercício #1 - Componente genérico com props">
            <Paragraph>
                Todas as props de um componente são passadas
                através do parâmetro "props". Para acessá-las
                use {" {props.nomeDaProps}"} no código.
            </Paragraph>

            <Paragraph>
                Elas também podem ser passadas individualmente, dando
                a escolha de quais serão passadas. Podem ser acessadas
                no código pelo seu nome: {" {nomeDaProps}"}.
            </Paragraph>
        </Card>
    )
}