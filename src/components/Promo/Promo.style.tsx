import styled, { css } from 'styled-components';
import { mediaOtherSize, mediaTablet } from 'src/constants/breakpoints';
import { CustomLink } from '../CustomLink';
import { FavoriteButton } from '../FavoriteButton';

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
            background-position: center;
        `}
    ${mediaTablet()} {
        min-height: 500px;
    }
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

    ${mediaTablet()} {
        left: 30px;
    }
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

    ${mediaTablet()} {
        flex-direction: column;
        right: 30px;
    }
`;

export const NameStyled = styled.p`
    color: white;
    font-size: 40px;
    text-transform: uppercase;
    max-width: 300px;
    text-align: left;

    ${mediaTablet()} {
        font-size: 28px;
    }
`;

export const GenreListStyled = styled.ul`
    display: flex;
    gap: 25px;

    ${mediaOtherSize(600)} {
        display: none;
    }
`;

export const GenreStyled = styled.li`
    color: white;
    font-size: 14px;
`;

export const InfoLinkStyled = styled(CustomLink)`
    ${mediaOtherSize(600)} {
        font-size: 16px;
        padding: 7px 11px;
    }

    ${mediaOtherSize(460)} {
        display: none;
    }
`;

export const WatchButtonStyled = styled(CustomLink)`
    ${mediaOtherSize(600)} {
        font-size: 16px;
        padding: 8px 12px;
    }
`;

export const FavoriteButtonStyled = styled(FavoriteButton)`
    ${mediaOtherSize(600)} {
        font-size: 16px;
    }

    ${mediaOtherSize(460)} {
        display: none;
    }
`;
