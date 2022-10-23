import styled, { css } from 'styled-components';
import { COLORS } from 'src/constants/colors';

export const KinoCardStyled = styled.div`
    max-width: 270px;
    width: 100%;
    border-radius: 5px;
    background-color: white;
    position: relative;
`;

export const ImgWrapper = styled.div<{ imgSrc?: string }>`
    background-color: silver;
    background-repeat: no-repeat;
    background-size: contain;
    height: 250px;
    background-position: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
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
    color: black;
    max-width: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const RatingStyled = styled.div`
    color: ${COLORS.Blue};
    border: 1px solid ${COLORS.Blue};
    padding: 3px 7px;
    border-radius: 4px;
`;

export const HiddenContentStyled = styled.div<{ isShow?: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 20px;

    ${({ isShow }) =>
        isShow &&
        css`
            opacity: 1;
            z-index: 2;
        `}
`;

export const HiddenTitleStyled = styled(TitleStyled)`
    color: white;
`;

export const CloseButtonStyled = styled.div`
    position: relative;
    cursor: pointer;
    width: 20px;
    height: 20px;

    &::after,
    &::before {
        content: '';
        position: absolute;
        width: 2px;
        height: 20px;
        left: 50%;
        top: 0;
        background-color: white;
    }

    &::after {
        transform: rotate(45deg);
    }

    &::before {
        transform: rotate(-45deg);
    }
`;

export const HiddenTopStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const DescriptionStyled = styled.p`
    color: white;
    font-size: 12px;
    line-height: 20px;
    margin-block: 20px;
`;
