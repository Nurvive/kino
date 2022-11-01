import React, { useCallback, useMemo } from 'react';
import { FavoriteButtonProps } from './FavoriteButton.types';
import { FavoriteButtonStyled } from './FavoriteButton.style';
import { useAppDispatch, useAppSelector } from 'src/store';
import { updateFavorites, updateFavoritesIds } from 'src/store/auth';
import { updateFavoritesFilms } from 'src/store/films';

export const FavoriteButton = ({ filmId, className }: FavoriteButtonProps) => {
    const dispatch = useAppDispatch();

    const { id, favorites } = useAppSelector((state) => state.auth);
    const { email } = useAppSelector((state) => state.auth);

    const isInFavorites = useMemo(() => favorites?.includes(filmId), [favorites, filmId]);

    const handleButtonClick = useCallback(() => {
        if (email) {
            void dispatch(updateFavorites({ filmId, userId: id }));
            if (isInFavorites) {
                dispatch(updateFavoritesFilms(filmId));
            }
        } else {
            dispatch(updateFavoritesIds(filmId))
        }
    }, [dispatch, email, filmId, id, isInFavorites]);

    return (
        <FavoriteButtonStyled isInFavorites={!isInFavorites} onClick={handleButtonClick} className={className}>
            {isInFavorites ? 'Убрать из избранного' : 'В избранное'}
        </FavoriteButtonStyled>
    );
};
