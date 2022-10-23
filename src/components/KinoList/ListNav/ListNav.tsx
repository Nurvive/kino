import React, { useCallback, useState } from 'react';
import { ItemStyled, ListNavStyled } from './ListNav.style';
import { NAV_ITEMS } from './ListNav.constants';
import { getFilms } from 'src/store/films';
import { useAppDispatch } from 'src/store';

export const ListNav = () => {
    const dispatch = useAppDispatch();
    const [clickedQuery, setClickedQuery] = useState(NAV_ITEMS[0].query);

    const handleNavClick = useCallback(
        (query: string) => {
            void dispatch(getFilms(query));
            setClickedQuery(query);
        },
        [dispatch],
    );

    return (
        <ListNavStyled>
            {NAV_ITEMS.map((item) => (
                <ItemStyled
                    isClicked={clickedQuery === item.query}
                    onClick={() => handleNavClick(item.query)}
                    key={item.title}
                >
                    {item.title}
                </ItemStyled>
            ))}
        </ListNavStyled>
    );
};
