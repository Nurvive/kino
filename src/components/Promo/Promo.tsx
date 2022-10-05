import React from 'react';
import { PromoProps } from './Promo.types';
import { Carousel } from 'react-responsive-carousel';
import {
    BackImgStyled, FavoriteButtonStyled,
    GenreListStyled,
    GenreStyled, InfoLinkStyled,
    InnerStyled,
    LeftWrapperStyled,
    NameStyled,
    PromoStyled,
    RightWrapperStyled, WatchButtonStyled,
} from './Promo.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RatingStars } from '../RatingStars';
import { CustomLinkStyles } from '../CustomLink/CustomLink.types';

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
                                <WatchButtonStyled href="mock-me">Смотреть</WatchButtonStyled>
                                <InfoLinkStyled styles={CustomLinkStyles.OUTLINED} href={'mock-me'}>
                                    Инфо о фильме
                                </InfoLinkStyled>
                                <FavoriteButtonStyled filmId={-1} />
                            </RightWrapperStyled>
                        </InnerStyled>
                    );
                })}
            </Carousel>
        </PromoStyled>
    );
};
