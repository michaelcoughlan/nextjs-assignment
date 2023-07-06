import { fetchPokemonQuery } from '@/queries';
import { BasePokemon } from '@/types';

export const fetchPokemon = async (limit: number, offset: number): Promise<BasePokemon[]> => {
    const pokemonResponse = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL || '', {
        method: 'POST',
        body: JSON.stringify(fetchPokemonQuery(limit, offset)),
    });

    const { data } = await pokemonResponse.json();

    return data.pokemon;
};
