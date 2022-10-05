import React from 'react';
import { CardsWrapper } from './KinoList.style';
import { ListNav } from './ListNav';
import { DEFAULT_CARDS } from './KinoList.constants';
import { KinoCard } from 'src/components/KinoCard';

export const KinoList = () => {
    return (
        <div>
            <ListNav />
            <CardsWrapper>
                {DEFAULT_CARDS.map((card) => (
                    <KinoCard
                        key={card.title}
                        rating={card.rating}
                        title={card.title}
                        description={card.description}
                        imgSrc={card.imgSrc}
                        filmId={card.filmId}
                        genre={card.genre}
                    />
                ))}
            </CardsWrapper>
        </div>
    );
};
