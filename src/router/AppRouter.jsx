import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth/pages/';
import { NotFound } from '../NotFound';
import { Root } from '../root';
import { HomePage } from '../journal/pages';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: (
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
                )
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
                        element: (
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute> 
                        )
        
                    },
                    {
                        path: 'register',
                        element: (
                            <PublicRoute>
                                <RegisterPage />
                            </PublicRoute>
                        )
                    }
                ]
            }
        ]
    },
    
]);