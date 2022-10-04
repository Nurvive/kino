import React from 'react';
import { ItemStyled, ListNavStyled } from './ListNav.style';
import { NAV_ITEMS } from './ListNav.constants';

export const ListNav = () => {
    return (
        <ListNavStyled>
            {NAV_ITEMS.map((item) => (
                <ItemStyled key={item}>{item}</ItemStyled>
            ))}
        </ListNavStyled>
    );
};
