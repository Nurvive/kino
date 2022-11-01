import React, { useEffect } from 'react';
import { KinoCard } from 'src/components/KinoCard';
import { CardsWrapper, FavoritesPageStyled, LayoutStyled } from './FavoritesPage.style';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getOneFilm } from 'src/store/films';

export const FavoritesPage = () => {
    const dispatch = useAppDispatch();
    const { favorites } = useAppSelector((state) => state.auth);
    const { favoritesFilms } = useAppSelector((state) => state.films);

    useEffect(() => {
        favorites?.forEach((id) => {
            void dispatch(getOneFilm({ id: String(id), withPrevious: true }));
        });
    }, [dispatch, favorites]);

    return (
        <LayoutStyled>
            <FavoritesPageStyled>
                <h1>Избранное</h1>
                <CardsWrapper>
                    {favoritesFilms?.map((film) => (
                        <KinoCard
                            key={film.ratingKinopoisk}
                            rating={film.ratingKinopoisk}
                            title={film.nameRu}
                            description={film.nameRu}
                            imgSrc={film.posterUrlPreview}
                            genres={film.genres}
                            filmId={film.kinopoiskId}
                        />
                    ))}
                </CardsWrapper>
            </FavoritesPageStyled>
        </LayoutStyled>
    );
};
