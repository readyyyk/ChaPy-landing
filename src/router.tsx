import {createBrowserRouter, redirect} from 'react-router-dom';
import App from './App.tsx';
import Landing from './routes/Landing';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Landing/>,
            },
            {
                path: '*',
                loader: ()=>redirect('/'),
            },
        ],
    },
]);
