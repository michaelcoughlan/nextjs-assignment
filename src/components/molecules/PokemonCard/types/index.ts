import { Move, SpeciesInformation } from '@/types';

export interface Props {
    id: number;
    moves: Move[];
    name: string;
    speciesInformation: SpeciesInformation;
}
