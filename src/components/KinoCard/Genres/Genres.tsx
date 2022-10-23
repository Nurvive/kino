import React from 'react';
import { GenreStyled, ItemStyled } from './Genres.style';
import { KinoCardProps } from 'src/components/KinoCard/KinoCard.types';

export const Genres = ({ genres }: Pick<KinoCardProps, 'genres'>) => {
    return (
        <GenreStyled>
            {genres.slice(0, 3).map(({ genre }) => (
                <ItemStyled key={genre}>{genre}</ItemStyled>
            ))}
        </GenreStyled>
    );
};
