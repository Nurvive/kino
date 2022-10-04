import styled from 'styled-components';

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
`;

export const NavStyled = styled.nav``;

export const LinksStyled = styled.ul`
    display: flex;
    gap: 16px;
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
