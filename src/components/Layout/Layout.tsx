import React from 'react';

import { Header } from 'src/components/Header';

import { LayoutProps } from './Layout.types';
import { Footer } from '../Footer';

export const Layout = ({ children, className }: LayoutProps) => {
    return (
        <div className={className}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
