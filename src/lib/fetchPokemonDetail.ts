import { fetchPokemonDetailQuery } from '@/queries';
import { PokemonDetail } from '@/types';

export const fetchPokemonDetail = async (id: string): Promise<PokemonDetail> => {
    const pokemonResponse = await fetch(process.env.BASE_API_URL || '', {
        method: 'POST',
        body: JSON.stringify(fetchPokemonDetailQuery(id)),
    });

    const { data } = await pokemonResponse.json();

    // We are assuming that the Pokemon has been returned and leaving out a 404 scenario
    return data.pokemon[0];
};
