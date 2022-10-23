import React, { useState } from 'react';
import {
    CloseButtonStyled,
    ContentStyled,
    DescriptionStyled,
    HiddenContentStyled,
    HiddenTitleStyled,
    HiddenTopStyled,
    ImgWrapper,
    InfoWrapper,
    KinoCardStyled,
    RatingStyled,
    TitleStyled,
} from './KinoCard.style';
import { KinoCardProps } from './KinoCard.types';
import { CustomLink } from 'src/components/CustomLink';
import { Link } from 'react-router-dom';
import { FavoriteButton } from 'src/components/FavoriteButton';
import { Genres } from './Genres';
import { FILM_PAGE } from 'src/constants/links';

export const KinoCard = ({ title, genres, imgSrc, rating, description, filmId }: KinoCardProps) => {
    const [isShowInfo, setIsShowInfo] = useState(false);

    const handleTransitionClick = () => {
        setIsShowInfo((prevState) => !prevState);
    };

    return (
        <KinoCardStyled>
            <ImgWrapper onClick={handleTransitionClick} imgSrc={imgSrc} />
            <ContentStyled>
                <InfoWrapper>
                    <Link to={`${FILM_PAGE}/${filmId}`}>
                        <TitleStyled>{title}</TitleStyled>
                    </Link>
                    <RatingStyled>{rating}</RatingStyled>
                </InfoWrapper>
                <Genres genres={genres} />
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
                <Genres genres={genres} />
                <DescriptionStyled>{description}</DescriptionStyled>
                <CustomLink href={`${FILM_PAGE}/${filmId}`}>Смотреть</CustomLink>
            </HiddenContentStyled>
        </KinoCardStyled>
    );
};
