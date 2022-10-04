import React from 'react';

export enum CustomLinkStyles {
    OUTLINED = 'OUTLINED',
}

export type CustomLinkProps = {
    href: string;
    children?: React.ReactNode;
    styles?: CustomLinkStyles;
};
