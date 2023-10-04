import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/block/Layout";
import HomeScreen from "../components/Pages/HomeScreen";

export const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [

            {
                index: true,
                element: <HomeScreen />

            }
        ]

    }
])