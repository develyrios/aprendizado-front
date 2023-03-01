import { Paragraph } from "../../../styles/Text"
import { Card } from "../../Card"
import { Pai } from "./pai"


export const Exercicio07 = () => {
    return(
        <Card title="Exercício #7 - Comunicação indireta sem useState">
            <Paragraph>
                Aqui, a informação é passada no sentido oposto,
                do filho pro pai. Para fazer isso podemos criar
                uma função no pai que será passada como props 
                pro filho, retornando a informação quando executada.
            </Paragraph>

            <Pai />
        </Card>
    )
}