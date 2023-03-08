import { useState } from "react"
import { Button } from "../../../styles/Button"
import { Span } from "../../../styles/Text"

export const Sorteador = () => {
    const [numeros,setNumeros] = useState(Array(6).fill(0))

    const gerarNumeroNaoContido = (array) => {
        let novoNumero = parseInt(Math.random() * (60 - 1) + 1)
        return array.includes(novoNumero) ?
            gerarNumeroNaoContido(array)
            :  novoNumero
    }

    const gerarSequenciaDeNumeros = () => {
        let novoArray = Array(6)
            .fill(0)
            .reduce(a => [...a, gerarNumeroNaoContido(a)], [])
            .sort((a,b) => a - b)
        setNumeros(novoArray)
    }

    return(
        <>
            <Button onClick={gerarSequenciaDeNumeros} >Gerar números</Button>
            <Span>Seus números são:</Span>
            <Span>{numeros.join(' ')}</Span>
        </>
    )
}