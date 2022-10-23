import React from 'react';
import { FormStyled, InputStyled, LoginButtonStyled, TitleStyled } from './Form.style';
import { FormProps } from './Form.types';

export const Form = ({ title, onSubmit }: FormProps) => {
    return (
        <FormStyled onSubmit={onSubmit}>
            <TitleStyled>{title}</TitleStyled>
            <InputStyled name="email" />
            <InputStyled name="password" />
            <LoginButtonStyled type="submit">{title}</LoginButtonStyled>
        </FormStyled>
    );
};
