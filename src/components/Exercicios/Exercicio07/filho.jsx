import { Button } from "../../../styles/Button"

export const Filho = ({ quandoClicar }) => {
    function acao() {
        quandoClicar(Math.random())
    }

    return(
        <Button onClick={acao}>
            Gerar valor
        </Button>
    )
}