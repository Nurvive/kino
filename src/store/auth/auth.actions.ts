import { createAsyncThunk } from '@reduxjs/toolkit';
import { UpdateFavorites, User, UserLogin, UserRegistration } from 'src/types';
import { login as httpLogin, registration as httpRegistration, updateFavorites as httpFavorites } from 'src/store/api';

export const login = createAsyncThunk<User, UserLogin>('auth/login', async (payload, { rejectWithValue }) => {
    try {
        return await httpLogin(payload);
    } catch (e) {
        return rejectWithValue(e);
    }
});

export const registration = createAsyncThunk<User, UserRegistration>(
    'auth/registration',
    async (payload, { rejectWithValue }) => {
        try {
            return await httpRegistration(payload);
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const updateFavorites = createAsyncThunk<User, UpdateFavorites>(
    'auth/updateFavorites',
    async (payload, { rejectWithValue }) => {
        try {
            return await httpFavorites(payload);
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);
