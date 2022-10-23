import styled from 'styled-components';
import { mediaTablet } from 'src/constants/breakpoints';

export const HeaderStyled = styled.header`
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    padding: 20px 40px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    z-index: 9;

    ${mediaTablet()} {
        padding: 15px 20px;
        align-items: center;
    }
`;

export const LogoStyled = styled.img`
    ${mediaTablet()} {
        max-width: 85px;
    }
`;

export const NavStyled = styled.nav`
    display: flex;
    gap: 26px;
    align-items: center;

    ${mediaTablet()} {
        gap: 15px;
    }
`;
