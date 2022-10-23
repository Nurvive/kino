export type Favorites = number[];

export type UpdateFavorites = {
    userId: number;
    filmId: number;
}

export type User = {
    id: number;
    email: string;
    favorites: Favorites;
};

export type UserLogin = {
    email: string;
    password: string;
};

export type UserRegistration = UserLogin;
