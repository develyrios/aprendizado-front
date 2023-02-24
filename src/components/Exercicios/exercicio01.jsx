import { Card } from "../Card"
import { Paragraph } from "../../styles/Text"

export const Exercicio01 = () => {
    return (
        <Card title="Exercício #1 - Componente genérico com props">
            <Paragraph>
                O componente "Card" é o componente genérico
                desta aplicação usado para alocar os exercícios.
            </Paragraph>
        </Card>
    )
}