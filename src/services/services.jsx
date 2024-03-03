export const getPokemons = () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
    
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        const { results } = responseJson;
        return results;
    })
    .catch((error) => console.error( error ))
}

export const getPokemon = (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => { 
        const { id, abilities, base_experience, height, is_default, name, sprites, stats, types, weight   } = responseJson;
        return {id, abilities, base_experience, height, is_default, name, sprites, stats, types, weight}
    })
    .catch((error) => console.error( error ))
}