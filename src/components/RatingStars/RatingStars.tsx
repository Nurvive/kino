import React from 'react';
import { RatingProps } from './RatingStars.types';
import { NumberStyled, RatingStyled } from './RatingStars.style';
import { Rating } from 'react-simple-star-rating';

export const RatingStars = ({ rating = 5 }: RatingProps) => {
    return (
        <RatingStyled>
            <Rating fillColor="#0AAEE4" size={25} ratingValue={rating * 20} />
            <NumberStyled>{rating}</NumberStyled>
        </RatingStyled>
    );
};
