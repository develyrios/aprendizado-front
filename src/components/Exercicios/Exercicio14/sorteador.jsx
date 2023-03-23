import { useState } from "react"
import { InputQuantidadeDeNumeros } from "./inputQuantidadeDeNumeros"
import { SequenciaDeNumeros } from "./sequenciaDeNumeros"

export const Sorteador = () => {

    const [quantidadeDeNumeros,setQuantidadeDeNumeros] = useState()

    const gerarNumeroNaoContido = (array) => {
        let novoNumero = parseInt(Math.random() * (60 - 1) + 1)
        return array.includes(novoNumero) ?
            gerarNumeroNaoContido(array)
            :  novoNumero
    }

    return(
        <>
            <InputQuantidadeDeNumeros 
                id="quantidadeDeNumeros" 
                type="number" 
                title="Quantos números você quer sortear?" 
                placeholder="Digite aqui" 
                quantidadeDeNumeros={quantidadeDeNumeros}
                setQuantidadeDeNumeros={setQuantidadeDeNumeros}
            />

            <SequenciaDeNumeros 
                quantidadeDeNumeros={quantidadeDeNumeros} 
                gerarNumeroNaoContido={gerarNumeroNaoContido} 
            />
        </>
    )
}