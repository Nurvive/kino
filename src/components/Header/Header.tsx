import React from 'react';
import { HeaderStyled, NavStyled, SignInStyled, SignUpStyled } from './Header.style';
import search from 'src/assets/img/search.svg';
import { LANDING, SEARCH, SIGN_IN, SIGN_UP } from 'src/constants/links';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <HeaderStyled>
            <Link to={LANDING}>
                <img src="/img/logo.png" alt="logo" />
            </Link>
            <NavStyled>
                <Link to={SEARCH}>
                    <img src={search} alt="search" />
                </Link>
                <SignInStyled to={SIGN_IN}>Войти</SignInStyled>
                <SignUpStyled to={SIGN_UP}>Зарегистрироваться</SignUpStyled>
            </NavStyled>
        </HeaderStyled>
    );
};
