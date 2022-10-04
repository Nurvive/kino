import React from 'react';
import { CustomLinkProps } from './CustomLink.types';
import { CustomLinkStyled } from './CustomLink.style';

export const CustomLink = ({ href, children, styles }: CustomLinkProps) => {
    return (
        <CustomLinkStyled styles={styles} to={href}>
            {children}
        </CustomLinkStyled>
    );
};
