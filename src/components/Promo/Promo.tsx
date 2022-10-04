import React from 'react';
import { PromoProps } from './Promo.types';
import { Carousel } from 'react-responsive-carousel';
import {
    BackImgStyled,
    GenreListStyled,
    GenreStyled,
    InfoLinkStyled,
    InnerStyled,
    LeftWrapperStyled,
    NameStyled,
    PromoStyled,
    RightWrapperStyled,
    WatchLinkStyled,
} from './Promo.style';
import { FavoriteButton } from '../FavoriteButton';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RatingStars } from '../RatingStars';

export const Promo = ({ content }: PromoProps) => {
    return (
        <PromoStyled>
            <Carousel showThumbs={false} showArrows={false} animationHandler="fade" swipeable={false}>
                {content.map((film) => {
                    return (
                        <InnerStyled bgi={film.img} key={film.name}>
                            <BackImgStyled src={film.img} />
                            <LeftWrapperStyled>
                                <NameStyled>{film.name}</NameStyled>
                                <GenreListStyled>
                                    {film.genre.map((item) => (
                                        <GenreStyled key={item}>{item}</GenreStyled>
                                    ))}
                                </GenreListStyled>
                                <RatingStars rating={film.rating} />
                            </LeftWrapperStyled>
                            <RightWrapperStyled>
                                <WatchLinkStyled to={'mock-me'}>Смотреть</WatchLinkStyled>
                                <InfoLinkStyled to={'mock-me'}>Инфо о фильме</InfoLinkStyled>
                                <FavoriteButton filmId={-1} />
                            </RightWrapperStyled>
                        </InnerStyled>
                    );
                })}
            </Carousel>
        </PromoStyled>
    );
};
