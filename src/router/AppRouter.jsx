import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth/pages/';
import { NotFound } from '../NotFound';
import { Root } from '../root';
import { HomePage } from '../journal/HomePage';


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'auth/',
                children: [
                    {
                        index: true,
                        element: <Navigate to={'login'} />

                    },
                    {
                        path: 'login',
                        element: <LoginPage />
        
                    },
                    {
                        path: 'register',
                        element: <RegisterPage />
                    }
                ]
            }
        ]
    },
    
]);