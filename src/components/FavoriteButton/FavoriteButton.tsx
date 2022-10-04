import React from 'react';
import { FavoriteButtonProps } from './FavoriteButton.types';
import { FavoriteButtonStyled } from './FavoriteButton.style';

export const FavoriteButton = ({ filmId }: FavoriteButtonProps) => {
    return <FavoriteButtonStyled>В избранное</FavoriteButtonStyled>;
};
