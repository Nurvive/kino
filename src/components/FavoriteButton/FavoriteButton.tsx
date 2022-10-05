import React from 'react';
import { FavoriteButtonProps } from './FavoriteButton.types';
import { FavoriteButtonStyled } from './FavoriteButton.style';

export const FavoriteButton = ({ filmId, className }: FavoriteButtonProps) => {
    return <FavoriteButtonStyled className={className}>В избранное</FavoriteButtonStyled>;
};
