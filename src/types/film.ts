import { FetchStatus } from './fetchStatus';

export type Film = {
    kinopoiskId: number;
    nameRu: string;
    ratingKinopoisk: number;
    year: number;
    genres: Array<{ genre: string }>;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
    description?: string
};

export type Meta = {
    total: number;
    totalPages: number;
};

export type FilmState = Meta & {
    items: Film[];
    promoItems: Film[];
    loadingStatus: FetchStatus;
    oneFilm: Film;
    favoritesFilms: Film[];
    unauthorizedFavoritesIds: number[];
};

export type getOneFilmArgs = {
    id: string;
    withPrevious?: boolean | undefined;
};

export type getQuestionsReturnType = {
    data: Film;
    withPrevious: boolean | undefined;
};
