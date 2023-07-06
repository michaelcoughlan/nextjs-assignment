import { GetStaticProps } from 'next';
import Head from 'next/head';

import { ListItem, Pagination } from '@/components';
import { fetchPokemon } from '@/lib';
import { BasePokemon } from '@/types';

interface Props {
    pokemon: BasePokemon[];
}

export default function Home({ pokemon }: Props) {
    return (
        <>
            <Head>
                <title>NextJS Assigment - Home</title>
            </Head>

            <div>
                { pokemon.map((poke: BasePokemon, index: number) => <ListItem key={index} id={poke.id} name={poke.name} />) }
            </div>

            <Pagination currentPage={1} pageSize={20} />
        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    // Fetch the initial 20 Pokemon
    const pokemon = await fetchPokemon(20, 0);

    return {
        props: { pokemon },
    };
};
