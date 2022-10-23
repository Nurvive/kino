import React, { useEffect } from 'react';
import { FilmPageStyled, LayoutStyled, PosterStyled, TitleStyled } from './FilmPage.style';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getOneFilm } from 'src/store/films';
import { useNavigate, useParams } from 'react-router';
import { LANDING } from 'src/constants/links';
import { RatingStars } from 'src/components/RatingStars';
import { Genres } from 'src/components/KinoCard/Genres';

export const FilmPage = () => {
    const dispatch = useAppDispatch();
    const { filmId } = useParams();
    const navigate = useNavigate();

    const { oneFilm } = useAppSelector((state) => state.films);

    useEffect(() => {
        if (filmId) {
            void dispatch(getOneFilm({ id: filmId }));
        } else {
            navigate(LANDING);
        }
    }, [dispatch, filmId, navigate]);

    return (
        <LayoutStyled>
            <FilmPageStyled>
                <TitleStyled>{oneFilm.nameRu}</TitleStyled>
                <RatingStars rating={oneFilm.ratingKinopoisk}/>
                <Genres genres={oneFilm.genres} />
                <PosterStyled src={oneFilm.posterUrl} alt='poster'/>
                <p>{oneFilm.description}</p>
            </FilmPageStyled>
        </LayoutStyled>
    );
};
