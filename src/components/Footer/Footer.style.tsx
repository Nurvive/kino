import styled from 'styled-components';
import { mediaTablet } from 'src/constants/breakpoints';

export const FooterStyled = styled.footer`
    display: flex;
    background-color: white;
    flex-direction: column;
    padding: 70px 80px 50px;
`;

export const InnerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mediaTablet()} {
        flex-direction: column;
        gap: 20px;
    }
`;

export const NavStyled = styled.nav``;

export const LinksStyled = styled.ul`
    display: flex;
    gap: 16px;

    ${mediaTablet()} {
        flex-direction: column;
    }
`;

export const LinkStyled = styled.li`
    a {
        color: #bbbcbd;
    }
`;

export const SocialWrapperStyled = styled.div`
    display: flex;
    gap: 16px;
`;

export const CopyrightStyled = styled.p`
    color: #bbbcbd;
    text-align: center;
    margin-top: 50px;
`;
