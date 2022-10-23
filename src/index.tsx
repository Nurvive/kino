import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './globalStyles.style';
import { Landing } from './pages/Landing';
import './assets/style/fonts.css';
import { FILM_PAGE, LANDING, SIGN_IN, SIGN_UP, USER_PAGE } from './constants/links';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { UserPage } from './pages/UserPage';
import { PersistGate } from 'redux-persist/integration/react';
import { FilmPage } from './pages/FilmPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter(
    [
        {
            path: LANDING,
            element: <Landing />,
        },
        {
            path: SIGN_IN,
            element: <Login />,
        },
        {
            path: SIGN_UP,
            element: <Registration />,
        },
        {
            path: USER_PAGE,
            element: <UserPage />,
        },
        {
            path: `${FILM_PAGE}/:filmId`,
            element: <FilmPage />,
        },
    ],
    {
        basename: String(process.env.PUBLIC_URL),
    },
);

root.render(
    <React.StrictMode>
        <GlobalStyles />
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
