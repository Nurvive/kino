import React from 'react';
import { HeaderStyled, LogoStyled, NavStyled, SearchStyled, SignInStyled, SignUpStyled } from './Header.style';
import search from 'src/assets/img/search.svg';
import { LANDING, SEARCH, SIGN_IN, SIGN_UP } from 'src/constants/links';
import { Link } from 'react-router-dom';
import logo from 'src/assets/img/logo.png'

export const Header = () => {
    return (
        <HeaderStyled>
            <Link to={LANDING}>
                <LogoStyled src={logo} alt="logo" />
            </Link>
            <NavStyled>
                <Link to={SEARCH}>
                    <SearchStyled src={search} alt="search" />
                </Link>
                <SignInStyled to={SIGN_IN}>Войти</SignInStyled>
                <SignUpStyled href={SIGN_UP}>Зарегистрироваться</SignUpStyled>
            </NavStyled>
        </HeaderStyled>
    );
};
