import { createSlice } from '@reduxjs/toolkit';
import { getFilms, getOneFilm, getPromoFilms } from './films.actions';
import { FilmState } from 'src/types/film';
import { FetchStatus } from 'src/types/fetchStatus';
import { DEFAULT_FILM } from 'src/constants/defaultFilm';

const initialState: FilmState = {
    items: [],
    promoItems: [],
    oneFilm: DEFAULT_FILM,
    favoritesFilms: [],
    total: 0,
    totalPages: 0,
    loadingStatus: FetchStatus.IDLE,
};

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        updateFavoritesFilms(state, payload) {
            state.favoritesFilms = state.favoritesFilms.filter((film) => film.kinopoiskId !== payload.payload);
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(getFilms.pending, (state) => {
                state.loadingStatus = FetchStatus.PENDING;
            })
            .addCase(getFilms.fulfilled, (state, action) => {
                state.items = action.payload.items;
                state.total = action.payload.total;
                state.totalPages = action.payload.totalPages;
                state.loadingStatus = FetchStatus.FULFILLED;
            })
            .addCase(getPromoFilms.fulfilled, (state, action) => {
                state.promoItems = action.payload.items?.slice(0, 4);
            })
            .addCase(getOneFilm.fulfilled, (state, action) => {
                if (action.payload.withPrevious) {
                    const alreadyIn = state.favoritesFilms.some(
                        (film) => film.kinopoiskId === action.payload.data.kinopoiskId,
                    );
                    if (!alreadyIn) {
                        state.favoritesFilms = [...state.favoritesFilms, action.payload.data];
                    }
                } else {
                    state.oneFilm = action.payload.data;
                }
            }),
});
export const { updateFavoritesFilms } = filmsSlice.actions;
export default filmsSlice.reducer;
