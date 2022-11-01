import React from 'react';
import { CustomLinkProps } from './CustomLink.types';
import { CustomLinkStyled } from './CustomLink.style';

export const CustomLink = ({ href, children, styles, className, target, rel }: CustomLinkProps) => {
    return (
        <CustomLinkStyled rel={rel} target={target} className={className} styles={styles} to={href}>
            {children}
        </CustomLinkStyled>
    );
};
