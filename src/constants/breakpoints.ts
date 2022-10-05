import { css } from 'styled-components';

export const mediaOtherSize = (size: number | string) =>
    css`
        @media screen and (max-width: ${typeof size === 'string' ? size : `${size}px`})`;

export const mediaTablet = () =>
    css`
        @media screen and (max-width: 768px)`;
