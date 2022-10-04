import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './globalStyles.style';
import { Landing } from './pages/Landing';
import './assets/style/fonts.css';
import { LANDING, SIGN_IN } from './constants/links';
import { Login } from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter([
    {
        path: LANDING,
        element: <Landing />,
    },
    {
        path: SIGN_IN,
        element: <Login />,
    },
]);

root.render(
    <React.StrictMode>
        <GlobalStyles />
        <RouterProvider router={router} />
    </React.StrictMode>,
);
