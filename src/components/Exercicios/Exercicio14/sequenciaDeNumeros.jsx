import { useState } from "react"
import { Button } from "../../../styles/Button"
import { Span } from "../../../styles/Text"

export const SequenciaDeNumeros = ({ 
        quantidadeDeNumeros, 
        gerarNumeroNaoContido 
    }) => {

    const [numeros,setNumeros] = useState(Array(quantidadeDeNumeros).fill(0))

    const gerarSequenciaDeNumeros = () => {
        let novoArray = Array(quantidadeDeNumeros)
            .fill(0)
            .reduce(a => [...a, gerarNumeroNaoContido(a)], [])
            .sort((a,b) => a - b)
            setNumeros(novoArray)
    }

    return(
        <>
        {
            quantidadeDeNumeros >= 6 ?
            <>
            <Button onClick={gerarSequenciaDeNumeros} >Gerar números</Button>
            <Span>Seus números são:</Span>
            <Span>{numeros.join(' ')}</Span>
            </>
            :
            <Span>Digite um número maior que 6 para ver o resultado</Span>
        }
        </>
    )
}