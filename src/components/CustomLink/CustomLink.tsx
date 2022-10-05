import React from 'react';
import { CustomLinkProps } from './CustomLink.types';
import { CustomLinkStyled } from './CustomLink.style';

export const CustomLink = ({ href, children, styles, className }: CustomLinkProps) => {
    return (
        <CustomLinkStyled className={className} styles={styles} to={href}>
            {children}
        </CustomLinkStyled>
    );
};
