import { Card } from "../Card"
import ObjetosAleatorios from "../../data/objetos-aleatorios"

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
            <ul>
                {getObjetosAleatorios()}
            </ul>
        </Card>
    )
}