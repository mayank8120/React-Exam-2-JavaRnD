import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from './views/Login/Login';
import Success from './views/Success Page/success';

const Routes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage />,
        },
        {
            path: "/success",
            element: <Success />,
        },
    ]);
    return (
        <RouterProvider router={router} />
    )
}

export default Routes