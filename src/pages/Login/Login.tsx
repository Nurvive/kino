import React, { useCallback } from 'react';
import { FormWrapperStyled, LayoutStyled } from './Login.style';
import { Form } from 'src/components/Form';
import { useAppDispatch } from 'src/store';
import { UserLogin } from 'src/types';
import { login, removeFavorites as userFavorites } from 'src/store/auth';
import { useNavigate } from 'react-router';
import { USER_PAGE } from 'src/constants/links';
import { removeFavorites } from 'src/store/films';

export const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData) as UserLogin;
            dispatch(removeFavorites());
            dispatch(userFavorites());
            void dispatch(login(data));
            navigate(USER_PAGE);
        },
        [dispatch, navigate],
    );

    return (
        <LayoutStyled>
            <FormWrapperStyled>
                <Form title="Логин" onSubmit={handleSubmit} />
            </FormWrapperStyled>
        </LayoutStyled>
    );
};
