import { RouteObject } from "react-router-dom";
import MainPageLayout from "../layouts/mainPageLayout/MainPageLayout";
import MainPage from "./main/MainPage";

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
    }
]