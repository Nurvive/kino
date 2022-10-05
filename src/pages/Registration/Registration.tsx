import React from 'react';
import { FormWrapperStyled, LayoutStyled } from './Registration.style';
import { Form } from '../../components/Form';

export const Registration = () => {
    return (
        <LayoutStyled>
            <FormWrapperStyled>
                <Form title="Регистрация" />
            </FormWrapperStyled>
        </LayoutStyled>
    );
};
