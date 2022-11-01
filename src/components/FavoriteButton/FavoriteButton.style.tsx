import styled, { css } from 'styled-components';
import { mediaOtherSize } from 'src/constants/breakpoints';

export const FavoriteButtonStyled = styled.div<{ isInFavorites?: boolean }>`
    color: white;
    font-size: 20px;
    position: relative;
    padding-left: 10px;
    cursor: pointer;

    ${({ isInFavorites }) =>
        isInFavorites &&
        css`
            &::after,
            &::before {
                content: '';
                position: absolute;
                left: 0;
                background-color: white;
                width: 2px;
                height: 12px;
                top: 25%;
            }

            &::after {
                transform: rotate(90deg);
            }
        `}
`;

export const CardsWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding: 15px 0;

    ${mediaOtherSize(900)} {
        justify-content: center;
    }
`;
