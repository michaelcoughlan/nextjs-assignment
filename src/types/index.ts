export interface BasePokemon {
    id: number;
    name: string;
}

export interface PokemonDetail extends BasePokemon {
    moves: Move[];
    speciesInformation: SpeciesInformation;
}

export interface Move {
    moveDetail: {
        name: string;
    };
}

export interface SpeciesInformation {
    capture_rate: number;
    is_legendary: boolean;
    is_mythical: boolean;
}
