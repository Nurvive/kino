import React from 'react';
import {
    ContentStyled,
    GenreStyled,
    ImgWrapper,
    InfoWrapper,
    ItemStyled,
    KinoCardStyled,
    RatingStyled,
    TitleStyled,
} from './KinoCard.style';
import { KinoCardProps } from './KinoCard.types';

export const KinoCard = ({ title, genre, imgSrc, rating, description }: KinoCardProps) => {
    return (
        <KinoCardStyled>
            <ImgWrapper imgSrc={imgSrc} />
            <ContentStyled>
                <InfoWrapper>
                    <TitleStyled>{title}</TitleStyled>
                    <RatingStyled>{rating}</RatingStyled>
                </InfoWrapper>
                <GenreStyled>
                    {genre.map((item) => (
                        <ItemStyled key={item}>{item}</ItemStyled>
                    ))}
                </GenreStyled>
            </ContentStyled>
        </KinoCardStyled>
    );
};
