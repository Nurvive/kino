import React from 'react';
import { LoaderStyled } from './Loader.style';

export const Loader = ({ className }: { className?: string }) => {
    return (
        <LoaderStyled className={className}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LoaderStyled>
    );
};
