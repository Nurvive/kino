type Promo = {
    name: string;
    img: string;
    rating: number;
    genre: string[];
    duration: number;
};

export type PromoProps = {
    content: Promo[];
};
