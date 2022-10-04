import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/colors';

export const KinoCardStyled = styled.div`
    max-width: 270px;
    width: 100%;
    border-radius: 5px;
    background-color: white;
`;

export const ImgWrapper = styled.div<{ imgSrc?: string }>`
    background-color: silver;
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
    background-position: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    ${({ imgSrc }) =>
        imgSrc &&
        css`
            background-image: url(${imgSrc});
        `}
`;

export const ContentStyled = styled.div`
    padding: 25px 20px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TitleStyled = styled.p`
    font-weight: bold;
    font-size: 21px;
`;

export const RatingStyled = styled.div`
    color: ${COLORS.Blue};
    border: 1px solid ${COLORS.Blue};
    padding: 3px 7px;
    border-radius: 4px;
`;

export const GenreStyled = styled.ul`
    display: flex;
    gap: 5px;
`;

export const ItemStyled = styled.li`
    color: ${COLORS.Blue};
    font-size: 12px;
`;
