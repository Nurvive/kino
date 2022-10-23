import React, { useEffect } from 'react';
import { CardsWrapper } from './KinoList.style';
import { ListNav } from './ListNav';
import { KinoCard } from 'src/components/KinoCard';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getFilms } from 'src/store/films';
import { FetchStatus } from 'src/types/fetchStatus';
import { Loader } from 'src/components/Loader';

export const KinoList = () => {
    const dispatch = useAppDispatch();

    const { items, loadingStatus } = useAppSelector((state) => state.films);

    useEffect(() => {
        void dispatch(getFilms('?order=NUM_VOTE&type=FILM'));
    }, [dispatch]);

    return (
        <div>
            <ListNav />
            <CardsWrapper>
                {loadingStatus === FetchStatus.FULFILLED ? (
                    items?.map((card) => (
                        <KinoCard
                            key={card.kinopoiskId}
                            rating={card.ratingKinopoisk}
                            title={card.nameRu}
                            description={card.nameRu}
                            imgSrc={card.posterUrlPreview}
                            filmId={card.kinopoiskId}
                            genres={card.genres}
                        />
                    ))
                ) : (
                    <Loader />
                )}
            </CardsWrapper>
        </div>
    );
};
