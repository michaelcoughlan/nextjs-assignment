import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { ListItem, Pagination } from '@/components';
import { MAX_LIMIT, PAGE_SIZE } from '@/constants';
import { fetchPokemon } from '@/lib';
import { BasePokemon } from '@/types';

interface Props {
    pokemon: BasePokemon[];
}

export default function Home({ pokemon }: Props) {
    const [clientSideData, setClientSideData] = useState<BasePokemon[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isCsrUsed, setIsCsrUsed] = useState<boolean>(false);

    useEffect(() => {
        // We will not fetch from the client side unless initiated from the Pagination component
        if (isCsrUsed) {
            fetchNewPokemon();
        }

        setIsCsrUsed(true);
    }, [currentPage]);

    const fetchNewPokemon = async () => {
        // If we are approaching our limit then do not use the full page size
        const pageSize = MAX_LIMIT < (currentPage * PAGE_SIZE)
            ? (currentPage * PAGE_SIZE) - MAX_LIMIT
            : PAGE_SIZE;
        const pokemon = await fetchPokemon(pageSize, PAGE_SIZE * (currentPage - 1));

        setClientSideData(pokemon);
    };

    return (
        <>
            <Head>
                <title>NextJS Assigment - Home</title>
            </Head>

            <div>
                {
                    isCsrUsed && clientSideData.length ? (
                        clientSideData.map((poke: BasePokemon, index: number) => <ListItem key={index} id={poke.id} name={poke.name} />)
                    ) : (
                        pokemon.map((poke: BasePokemon, index: number) => <ListItem key={index} id={poke.id} name={poke.name} />)
                    )
                }
            </div>

            <Pagination currentPage={currentPage} changePage={(newPage) => setCurrentPage(newPage)} />
        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    // Fetch the initial 20 Pokemon
    const pokemon = await fetchPokemon(PAGE_SIZE, 0);

    return {
        props: { pokemon },
    };
};
