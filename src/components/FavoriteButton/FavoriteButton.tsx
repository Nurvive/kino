import React, { useCallback, useMemo } from 'react';
import { FavoriteButtonProps } from './FavoriteButton.types';
import { FavoriteButtonStyled } from './FavoriteButton.style';
import { useAppDispatch, useAppSelector } from 'src/store';
import { updateFavorites } from 'src/store/auth';
import { updateFavoritesFilms } from '../../store/films';

export const FavoriteButton = ({ filmId, className }: FavoriteButtonProps) => {
    const dispatch = useAppDispatch();
    const { id, favorites } = useAppSelector((state) => state.auth);
    const isInFavorites = useMemo(() => favorites?.includes(filmId), [favorites, filmId]);

    const handleButtonClick = useCallback(() => {
        void dispatch(updateFavorites({ filmId, userId: id }));
        if (isInFavorites) {
            void dispatch(updateFavoritesFilms(filmId));
        }
    }, [dispatch, filmId, id, isInFavorites]);

    return (
        <FavoriteButtonStyled isInFavorites={!isInFavorites} onClick={handleButtonClick} className={className}>
            {isInFavorites ? 'Убрать из избранного' : 'В избранное'}
        </FavoriteButtonStyled>
    );
};
