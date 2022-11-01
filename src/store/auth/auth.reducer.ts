import { createSlice } from '@reduxjs/toolkit';
import { User } from 'src/types/user';
import { login, registration, updateFavorites } from './auth.actions';

const initialState: User = {
    id: -1,
    email: '',
    favorites: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        removeUser(state) {
            state.email = '';
            state.id = -1;
            state.favorites = [];
        },
        updateFavoritesIds(state, { payload }) {
            state.favorites = [...state.favorites, payload]
        },
        removeFavorites(state) {
            state.favorites = [];
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.id = action.payload.id;
                state.email = action.payload.email;
                state.favorites = action.payload.favorites;
            })
            .addCase(login.rejected, () => {
                console.error('Ошибка входа');
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.id = action.payload.id;
                state.email = action.payload.email;
                state.favorites = action.payload.favorites;
            })
            .addCase(registration.rejected, () => {
                console.error('Ошибка регистрации');
            })
            .addCase(updateFavorites.fulfilled, (state, action) => {
                state.favorites = action.payload.favorites;
            }),
});
export const { removeUser, removeFavorites, updateFavoritesIds } = authSlice.actions;
export default authSlice.reducer;
