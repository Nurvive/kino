import { API_KEY, BASE_PATH } from './films.constants';
import { Film, FilmState } from 'src/types/film';

export const getList = async (query: string | undefined): Promise<FilmState> => {
    const response = await fetch(`${BASE_PATH}${query ?? ''}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
};

export const getFilm = async (id: string): Promise<Film> => {
    const response = await fetch(`${BASE_PATH}/${id}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
};
