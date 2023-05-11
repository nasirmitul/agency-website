import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import AboutLayout from "../layouts/AboutLayout";
import ProjectLayout from "../layouts/ProjectLayout";
import Contact from "../components/Contact/Contact";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path: '/about-us',
                element: <AboutLayout></AboutLayout>
            },
            {
                path: '/projects',
                element: <ProjectLayout></ProjectLayout>
            },
            {
                path: 'contact-us',
                element: <Contact></Contact>
            }
        ]
    },
]);

export default MainRouter;