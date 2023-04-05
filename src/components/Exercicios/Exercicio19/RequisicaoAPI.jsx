import { useEffect, useState } from "react"
import { Button } from "../../../styles/Button";
import { ContainerPokemon, PokemonInfo } from "../../../styles/ContainerPokemon";
import { Span } from "../../../styles/Text";
import { InputPesquisa } from "../../InputPesquisa";

export const RequisicaoAPI = () => {
    const [imagemPokemon, setImagemPokemon] = useState();
    const [nomePokemon, setNomePokemon] = useState();
    const [nomeDigitado, setNomeDigitado] = useState();
    const [nomeBuscado, setNomeBuscado] = useState("");

    // todo: Tratamento de erros de requisição de API
    useEffect(() => {
        if(nomeBuscado.length > 0) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${nomeBuscado}`)
            .then(response => response.json())
            .then(pokemon => {
                setImagemPokemon(pokemon.sprites.front_default)
                setNomePokemon(pokemon.name)
            })
        }
    }, [nomeBuscado])
    
    const buscarPokemon = () => {
        setNomeBuscado(nomeDigitado.toLowerCase())
    }

    return (
        <>
            <InputPesquisa 
                id="buscarPokemon" 
                type="text" 
                placeholder="Digite aqui" 
                conteudo={nomeDigitado} 
                setConteudo={setNomeDigitado} 
            />
            
            <Button onClick={buscarPokemon}>Buscar</Button>

            <ContainerPokemon>
                <img src={imagemPokemon} />
                <PokemonInfo>
                    <Span>{nomePokemon}</Span>
                </PokemonInfo>
            </ContainerPokemon>
        </>
    )
}