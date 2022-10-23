import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import {
    BackImgStyled,
    FavoriteButtonStyled,
    GenreListStyled,
    GenreStyled,
    InnerStyled,
    LeftWrapperStyled,
    NameStyled,
    PromoStyled,
    RightWrapperStyled,
    WatchButtonStyled,
} from './Promo.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RatingStars } from 'src/components/RatingStars';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getPromoFilms } from 'src/store/films';
import { FILM_PAGE } from 'src/constants/links';

export const Promo = () => {
    const dispatch = useAppDispatch();
    const { promoItems } = useAppSelector((state) => state.films);

    useEffect(() => {
        void dispatch(getPromoFilms());
    }, [dispatch]);
    return (
        <PromoStyled>
            <Carousel showThumbs={false} showArrows={false} animationHandler="fade" swipeable={false}>
                {promoItems?.map((film) => {
                    return (
                        <InnerStyled bgi={film.posterUrl} key={film.kinopoiskId}>
                            <BackImgStyled src={film.posterUrl} />
                            <LeftWrapperStyled>
                                <NameStyled>{film.nameRu}</NameStyled>
                                <GenreListStyled>
                                    {film.genres.map(({ genre }) => (
                                        <GenreStyled key={genre}>{genre}</GenreStyled>
                                    ))}
                                </GenreListStyled>
                                <RatingStars rating={film.ratingKinopoisk} />
                            </LeftWrapperStyled>
                            <RightWrapperStyled>
                                <WatchButtonStyled href={`${FILM_PAGE}/${film.kinopoiskId}`}>
                                    Смотреть
                                </WatchButtonStyled>
                                <FavoriteButtonStyled filmId={film.kinopoiskId} />
                            </RightWrapperStyled>
                        </InnerStyled>
                    );
                })}
            </Carousel>
        </PromoStyled>
    );
};
