import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const PromoStyled = styled.div`
    width: 100%;

    & ul.slider {
        z-index: 0;
    }

    & .carousel .carousel-status {
        display: none;
    }
`;

export const InnerStyled = styled.div<{ bgi?: string }>`
    width: 100%;
    position: relative;
    z-index: 5;

    ${({ bgi }) =>
        bgi &&
        css`
            background-image: linear-gradient(to bottom, black -15%, transparent 25%, transparent 65%, black 100%),
                url(${bgi});
            background-repeat: no-repeat;
            background-size: cover;
        `}
`;

export const BackImgStyled = styled.img`
    opacity: 0;
`;

export const LeftWrapperStyled = styled.div`
    position: absolute;
    left: 60px;
    bottom: 12%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const RightWrapperStyled = styled.div`
    position: absolute;
    right: 60px;
    bottom: 12%;
    gap: 20px;
    display: flex;
    align-items: center;

    & a {
        z-index: 3;
    }
`;

export const NameStyled = styled.p`
    color: white;
    font-size: 40px;
    text-transform: uppercase;
`;

export const GenreListStyled = styled.ul`
    display: flex;
    gap: 25px;
`;

export const GenreStyled = styled.li`
    color: white;
    font-size: 14px;
`;

export const InfoLinkStyled = styled(Link)`
    border-radius: 4px;
    font-size: 20px;
    padding: 9px 13px;
    color: white;
    border: 1px solid white;
`;
