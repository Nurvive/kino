import React from 'react';

import { Promo } from 'src/components/Promo';
import { DEFAULT_PROMO } from 'src/components/Promo/Promo.constants';
import { KinoList } from 'src/components/KinoList';
import { LayoutStyled, WrapperContent } from './Landing.style';

export const Landing = () => {
    return (
        <LayoutStyled>
            <Promo content={DEFAULT_PROMO} />
            <WrapperContent>
                <KinoList />
            </WrapperContent>
        </LayoutStyled>
    );
};
