import {
    createBrowserRouter
} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import ProjectPage from "./Pages/Project/ProjectPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage></LoginPage>
    },
    {
        path: "/home",
        element: <HomePage></HomePage>
    },
    {
        path: "/project",
        element: <ProjectPage />
    }
]);
