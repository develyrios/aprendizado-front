import { useEffect, useState } from "react"
import { Button } from "../../../styles/Button";
import { ContainerPokemon, PokemonInfo } from "../../../styles/ContainerPokemon";
import { Span } from "../../../styles/Text";
import { InputPesquisa } from "../../InputPesquisa";

export const RequisicaoAPI = () => {
    const [imagemPokemon, setImagemPokemon] = useState();
    const [nomePokemon, setNomePokemon] = useState();
    const [idDigitado, setIdDigitado] = useState();
    const [idBuscado, setIdBuscado] = useState();

    useEffect(() => {
        if(idBuscado >= 1 && idBuscado <=1000) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${idBuscado}`)
            .then(response => response.json())
            .then(pokemon => {
                setImagemPokemon(pokemon.sprites.front_default)
                setNomePokemon(pokemon.name)
            })
        }
    }, [idBuscado])
    
    const buscarPokemon = () => {
        setIdBuscado(idDigitado)
    }

    return (
        <>
            <InputPesquisa 
                id="buscarPokemon" 
                type="number" 
                placeholder="Digite aqui" 
                conteudo={idDigitado}
                setConteudo={setIdDigitado}
            />
                
            <Button onClick={buscarPokemon}>Buscar</Button>
            {
                idBuscado >= 1 && idBuscado <=1000 ?
                <ContainerPokemon>
                    <img src={imagemPokemon} />
                    <PokemonInfo>
                        <Span>{nomePokemon}</Span>
                    </PokemonInfo>
                </ContainerPokemon>
                :
                <Span>Digite um número de 1 a 1000.</Span>
            }
        </>
    )
}