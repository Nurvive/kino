import React, { useCallback, useEffect } from 'react';
import { EmailStyled, LayoutStyled, LogOutButtonStyled, UserPageStyled } from './UserPage.style';
import { useAppDispatch, useAppSelector } from 'src/store';
import { removeUser } from 'src/store/auth';
import { useNavigate } from 'react-router';
import { LANDING } from 'src/constants/links';
import { getOneFilm, removeFavorites } from 'src/store/films';
import { KinoCard } from 'src/components/KinoCard';
import { CardsWrapper } from 'src/components/FavoriteButton/FavoriteButton.style';

export const UserPage = () => {
    const dispatch = useAppDispatch();
    const { email, favorites } = useAppSelector((state) => state.auth);
    const { favoritesFilms } = useAppSelector((state) => state.films);
    const navigate = useNavigate();
    console.log(favorites, favoritesFilms);
    const handleLogOutClick = useCallback(() => {
        void dispatch(removeUser());
        dispatch(removeFavorites());
        navigate(LANDING);
    }, [dispatch, navigate]);

    useEffect(() => {
        // dispatch(removeFavorites());

        favorites?.forEach((id) => {
            void dispatch(getOneFilm({ id: String(id), withPrevious: true }));
        });
    }, [dispatch, favorites]);

    return (
        <LayoutStyled>
            <UserPageStyled>
                <EmailStyled>Имя пользователя: {email}</EmailStyled>
                <LogOutButtonStyled onClick={handleLogOutClick}>Выйти</LogOutButtonStyled>
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
            </UserPageStyled>
        </LayoutStyled>
    );
};
