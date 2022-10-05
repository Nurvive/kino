import React from 'react';
import { FormStyled, InputStyled, LoginButtonStyled, TitleStyled } from './Form.style';
import { FormProps } from './Form.types';

export const Form = ({ title }: FormProps) => {
    return (
        <FormStyled>
            <TitleStyled>{title}</TitleStyled>
            <InputStyled />
            <InputStyled />
            <LoginButtonStyled href="mock-me">Войти</LoginButtonStyled>
        </FormStyled>
    );
};
