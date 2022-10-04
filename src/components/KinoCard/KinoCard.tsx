import React, { useState } from 'react';
import {
    CloseButtonStyled,
    ContentStyled,
    DescriptionStyled,
    GenreStyled,
    HiddenContentStyled,
    HiddenTitleStyled,
    HiddenTopStyled,
    ImgWrapper,
    InfoWrapper,
    ItemStyled,
    KinoCardStyled,
    RatingStyled,
    TitleStyled,
} from './KinoCard.style';
import { KinoCardProps } from './KinoCard.types';
import { CustomLink } from '../CustomLink';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../FavoriteButton';

export const KinoCard = ({ title, genre, imgSrc, rating, description, filmId }: KinoCardProps) => {
    const [isShowInfo, setIsShowInfo] = useState(false);

    const handleTransitionClick = () => {
        setIsShowInfo((prevState) => !prevState);
    };

    return (
        <KinoCardStyled>
            <ImgWrapper onClick={handleTransitionClick} imgSrc={imgSrc} />
            <ContentStyled>
                <InfoWrapper>
                    <Link to="mock-me">
                        <TitleStyled>{title}</TitleStyled>
                    </Link>
                    <RatingStyled>{rating}</RatingStyled>
                </InfoWrapper>
                <GenreStyled>
                    {genre.map((item) => (
                        <ItemStyled key={item}>{item}</ItemStyled>
                    ))}
                </GenreStyled>
            </ContentStyled>
            <HiddenContentStyled isShow={isShowInfo}>
                <HiddenTopStyled>
                    <CloseButtonStyled onClick={handleTransitionClick} />
                    <FavoriteButton filmId={filmId} />
                </HiddenTopStyled>
                <InfoWrapper>
                    <HiddenTitleStyled>{title}</HiddenTitleStyled>
                    <RatingStyled>{rating}</RatingStyled>
                </InfoWrapper>
                <GenreStyled>
                    {genre.map((item) => (
                        <ItemStyled key={item}>{item}</ItemStyled>
                    ))}
                </GenreStyled>
                <DescriptionStyled>{description}</DescriptionStyled>
                <CustomLink href="mock-me">Смотреть</CustomLink>
            </HiddenContentStyled>
        </KinoCardStyled>
    );
};
