import { RouteObject } from "react-router-dom";
import MainPageLayout from "../layouts/mainPageLayout/MainPageLayout";
import MainPage from "./main/MainPage";
import Login from "./login/Login";
import Register from "./register/Register";

export default (): RouteObject[] => [
    {
        path: '/',
        element: <MainPageLayout />,
        children: [
            {
                index: true,
                element: <MainPage />
            }
        ]
    },
    {
        path: '/login',
        children: [
            {
                index: true,
                element: <Login />,
            },
        ],
    },
    {
        path: '/register',
        children: [
            {
                index: true,
                element: <Register />,
            },
        ],
    },
];