import { createAsyncThunk } from '@reduxjs/toolkit';
import { getList, getFilm } from 'src/store/api/filmsHttp';
import { getOneFilmArgs, getQuestionsReturnType } from '../../types/film';

export const getFilms = createAsyncThunk('films/getFilms', async (query: string | undefined, { rejectWithValue }) => {
    try {
        return await getList(query);
    } catch (e) {
        return rejectWithValue(e);
    }
});

export const getPromoFilms = createAsyncThunk(
    'films/getPromoFilms',
    async (query: string | undefined, { rejectWithValue }) => {
        try {
            return await getList('?yearTo=2021&type=FILM');
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const getOneFilm = createAsyncThunk<getQuestionsReturnType, getOneFilmArgs>(
    'films/getOneFilm',
    async ({ id, withPrevious }, { rejectWithValue }) => {
        try {
            return { data: await getFilm(id), withPrevious };
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);
