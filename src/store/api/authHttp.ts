import { UpdateFavorites, User, UserLogin, UserRegistration } from 'src/types';
import { AUTH_PATH, BACKEND_URL, USERS_PATH } from './api.constants';
import decode from 'jwt-decode';

export const login = async (body: UserLogin) => {
    const url = `${BACKEND_URL}${AUTH_PATH}/login`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(body),
    });
    const result = await response.json();
    return decode<User>(result.token);
};

export const registration = async (body: UserRegistration) => {
    const url = `${BACKEND_URL}${AUTH_PATH}/registration`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(body),
    });
    const result = await response.json();
    return decode<User>(result.token);
};

export const updateFavorites = async (body: UpdateFavorites) => {
    const url = `${BACKEND_URL}${USERS_PATH}`;
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(body),
    });
    return await response.json();
};
