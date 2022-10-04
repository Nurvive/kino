import React from 'react';
import { CardsWrapper, KinoListStyled } from './KinoList.style';
import { ListNav } from './ListNav';
import { DEFAULT_CARDS } from './KinoList.constants';
import { KinoCard } from 'src/components/KinoCard';

export const KinoList = () => {
    return (
        <KinoListStyled>
            <ListNav />
            <CardsWrapper>
                {DEFAULT_CARDS.map((card) => (
                    <KinoCard
                        key={card.title}
                        rating={card.rating}
                        title={card.title}
                        description={card.description}
                        imgSrc={card.imgSrc}
                        genre={card.genre}
                    />
                ))}
            </CardsWrapper>
        </KinoListStyled>
    );
};
