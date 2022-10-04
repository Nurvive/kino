import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './globalStyles.style';
import { Landing } from './pages/Landing';
import './assets/style/fonts.css';
import { LANDING } from './constants/links';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter([
    {
        path: LANDING,
        element: <Landing />,
    },
]);

root.render(
    <React.StrictMode>
        <GlobalStyles />
        <RouterProvider router={router} />
    </React.StrictMode>,
);
