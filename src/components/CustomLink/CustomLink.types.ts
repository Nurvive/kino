import React from 'react';

export enum CustomLinkStyles {
    OUTLINED = 'OUTLINED',
}

export type CustomLinkProps = {
    href: string;
    className?: string;
    children?: React.ReactNode;
    styles?: CustomLinkStyles;
};
