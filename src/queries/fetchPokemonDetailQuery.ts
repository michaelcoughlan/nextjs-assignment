export const fetchPokemonDetailQuery = (id: string) => ({
    query: `{ pokemon: pokemon_v2_pokemon(where: { id: { _eq: ${id} }}) { id name moves: pokemon_v2_pokemonmoves(limit: 4) { moveDetail: pokemon_v2_move { name }} speciesInformation: pokemon_v2_pokemonspecy { capture_rate is_legendary is_mythical }}}`,
});
