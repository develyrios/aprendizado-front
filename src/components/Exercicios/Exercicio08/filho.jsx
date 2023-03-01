export const Filho = ({ quandoClicar }) => {
    const acao = () => {
        quandoClicar(Math.random())
    }

    return(
        <>
        <button onClick={acao}>
            Gerar valor
        </button>
        </>
    )
}