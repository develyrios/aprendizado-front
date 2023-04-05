import { useEffect, useState } from "react"
import { ContainerPokemon, PokemonInfo } from "../../../styles/ContainerPokemon";
import { Span } from "../../../styles/Text";

export const RequisicaoAPI = () => {
    const [imagemPokemon, setImagemPokemon] = useState();
    const [nomePokemon, setNomePokemon] = useState();

    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/sylveon"

    useEffect(() => {
        fetch(BASE_URL)
        .then(response => response.json())
        .then(pokemon => {
            setImagemPokemon(pokemon.sprites.front_default)
            setNomePokemon(pokemon.name)
        })
    }, [])
    


    return (
        <ContainerPokemon>
            <img src={imagemPokemon} />
            <PokemonInfo>
                <Span>{nomePokemon}</Span>
            </PokemonInfo>
        </ContainerPokemon>
    )
}