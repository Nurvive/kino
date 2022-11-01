import React, { useCallback } from 'react';
import { FormWrapperStyled, LayoutStyled } from './Registration.style';
import { Form } from 'src/components/Form';
import { useAppDispatch } from 'src/store';
import { UserRegistration } from 'src/types';
import { registration, removeFavorites as userFavorites } from 'src/store/auth';
import { USER_PAGE } from 'src/constants/links';
import { useNavigate } from 'react-router';
import { removeFavorites } from 'src/store/films';

export const Registration = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData) as UserRegistration;
        dispatch(removeFavorites());
        dispatch(userFavorites());
        void dispatch(registration(data));
        navigate(USER_PAGE);
    }, [dispatch, navigate]);

    return (
        <LayoutStyled>
            <FormWrapperStyled>
                <Form title="Регистрация" onSubmit={handleSubmit} />
            </FormWrapperStyled>
        </LayoutStyled>
    );
};
