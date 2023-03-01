import { Card } from "../../Card"
import ObjetosAleatorios from "../../../data/objetos-aleatorios"
import { Paragraph } from "../../../styles/Text"

export const Exercicio02 = () => {
    function getObjetosAleatorios() {
        return ObjetosAleatorios.map( obj => {
            return <li key={obj.id}>
                {obj.id} - {obj.nome} - {obj.tamanho} - {obj.cor}
            </li>
        })
    }

    return (
        <Card title="Exercício #2 - Repetição de elementos">
            <Paragraph>
                É possível criar uma função para gerar uma lista
                de elementos a partir de um array de objetos.
            </Paragraph>
            
            <ul>
                {getObjetosAleatorios()}
            </ul>
        </Card>
    )
}