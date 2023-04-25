import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../journal/HomePage';


export const router = createBrowserRouter([
    
    {
        path: '/',
        element: <HomePage />
    }
]);