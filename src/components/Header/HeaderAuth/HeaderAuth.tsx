import React from 'react';
import { SignInStyled, SignUpStyled } from './HeaderAuth.style';
import { SIGN_IN, SIGN_UP } from 'src/constants/links';

export const HeaderAuth = () => {
    return (
        <>
            <SignInStyled to={SIGN_IN}>Войти</SignInStyled>
            <SignUpStyled href={SIGN_UP}>Зарегистрироваться</SignUpStyled>
        </>
    );
};
