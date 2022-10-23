import React from 'react';

import { Promo } from 'src/components/Promo';
import { KinoList } from 'src/components/KinoList';
import { LayoutStyled, WrapperContent } from './Landing.style';

export const Landing = () => {
    return (
        <LayoutStyled>
            <Promo />
            <WrapperContent>
                <KinoList />
            </WrapperContent>
        </LayoutStyled>
    );
};
