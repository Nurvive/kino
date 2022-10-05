import React from 'react';
import { FormWrapperStyled, LayoutStyled } from './Login.style';
import { Form } from 'src/components/Form';

export const Login = () => {
    return (
        <LayoutStyled>
            <FormWrapperStyled>
                <Form title="Логин" />
            </FormWrapperStyled>
        </LayoutStyled>
    );
};
