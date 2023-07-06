export const fetchPokemonQuery = (limit: number, offset: number) => ({
    query: `{ pokemon: pokemon_v2_pokemonspecies(limit: ${limit}, offset: ${offset}, order_by: { id: asc }) { name id } }`,
});
