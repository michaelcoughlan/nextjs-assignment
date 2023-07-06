import { ReactElement } from 'react';

import { Move } from '@/types';

import { Props } from './types';

const PokemonCard = ({ id, moves, name, speciesInformation }: Props): ReactElement => {
    return (
        <div className="flex justify-center">
            <div className="mt-4 border-2 border-black rounded p-8">
                <h2 className="capitalize text-xl">#{id} {name}</h2>

                <div className="my-4">
                    <div className="h-32 w-[100%] border-2" />
                </div>

                <div className="mt-4 text-md">
                    <p>Capture Rate: {speciesInformation.capture_rate}%</p>
                    <p>Legendary? {speciesInformation.is_legendary ? 'Yes' : 'No'}</p>
                    <p>Mythical? {speciesInformation.is_mythical ? 'Yes' : 'No'}</p>
                </div>

                <div className="mt-4 text-md">
                    <h3 className="font-bold">Moves</h3>
                    <div className="grid grid-rows-2 grid-flow-col gap-4 capitalize">
                        {
                            moves.map((move: Move, index: number) => (
                                <span key={`moves__${index}`}>{move.moveDetail.name}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
