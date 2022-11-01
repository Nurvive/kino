import React, { HTMLAttributeAnchorTarget } from 'react';

export enum CustomLinkStyles {
    OUTLINED = 'OUTLINED',
}

export type CustomLinkProps = {
    rel?: string;
    href: string;
    className?: string;
    children?: React.ReactNode;
    styles?: CustomLinkStyles;
    target?: HTMLAttributeAnchorTarget
};
