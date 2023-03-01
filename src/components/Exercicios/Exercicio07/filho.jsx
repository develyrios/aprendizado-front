export const Filho = ({ quandoClicar }) => {
    function acao() {
        quandoClicar(Math.random())
    }

    return(
        <button onClick={acao}>
            Gerar valor
        </button>
    )
}