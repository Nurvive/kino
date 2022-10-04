import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
    background-color: transparent;
    width: 100%;
    padding: 20px 40px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    z-index: 9;
`;

export const NavStyled = styled.nav`
    display: flex;
    gap: 26px;
    align-items: center;
`;

export const SignInStyled = styled(Link)`
    color: white;
    font-size: 20px;
`;

export const SignUpStyled = styled(Link)`
    color: white;
    background-color: #0aaee4;
    border-radius: 4px;
    font-size: 20px;
    padding: 10px 14px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #008fbe;
    }
`;
