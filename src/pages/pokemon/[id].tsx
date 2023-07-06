import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { Button, PokemonCard } from '@/components';
import { MAX_LIMIT } from '@/constants';
import { fetchPokemon, fetchPokemonDetail } from '@/lib';
import { PokemonDetail } from '@/types';

const PokemonDetail = ({ pokemon }: { pokemon: PokemonDetail }) => {
    return (
        <>
            <Head>
                <title>NextJS Assigment - Pokemon Detail</title>
            </Head>

            <div>
                <Link href="/"><Button text="Back" /></Link>
                <PokemonCard
                    id={pokemon.id}
                    moves={pokemon.moves}
                    name={pokemon.name}
                    speciesInformation={pokemon.speciesInformation}
                />
            </div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const pokemonResponse = await fetchPokemon(MAX_LIMIT, 0);
    const pokemonPaths = pokemonResponse.map((pokemon) => ({ params: { id: pokemon.id + '' }}));

    return {
        fallback: 'blocking',
        paths: pokemonPaths,
    };
};

export const getStaticProps: GetStaticProps<{ pokemon: PokemonDetail }> = async (context) => {
    const pokemonResponse = await fetchPokemonDetail(context?.params?.id as string);

    return {
        props: {
            pokemon: pokemonResponse,
        },
    };
};

export default PokemonDetail;
