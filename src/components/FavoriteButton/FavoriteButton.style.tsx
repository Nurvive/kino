import styled from 'styled-components';

export const FavoriteButtonStyled = styled.div`
    color: white;
    font-size: 20px;
    position: relative;
    padding-left: 10px;
    cursor: pointer;

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
`;
