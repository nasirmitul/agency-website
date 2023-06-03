import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import AboutLayout from "../layouts/AboutLayout";
import ProjectLayout from "../layouts/ProjectLayout";
import Contact from "../components/Contact/Contact";
import AdminLayout from "../layouts/AdminLayout";
import AdminHome from "../components/Admin/AdminHome";
import AdminAbout from "../components/Admin/AdminAbout";
import AdminProjects from "../components/Admin/AdminProjects";
import AdminContact from "../components/Admin/AdminContact";
import AdminProfile from "../components/Admin/AdminProfile";
import AdminFooter from "../components/Admin/AdminFooter";
import NotFound from "../components/Error/NotFound";


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
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: '/admin',
                element: <AdminHome></AdminHome>
            },
            {
                path: '/admin/home',
                element: <AdminHome></AdminHome>
            },
            {
                path: '/admin/about',
                element: <AdminAbout></AdminAbout>
            },
            {
                path: '/admin/projects',
                element: <AdminProjects></AdminProjects>
            },
            {
                path: '/admin/contact',
                element: <AdminContact></AdminContact>
            },
            {
                path: '/admin/profile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: '/admin/footer',
                element: <AdminFooter></AdminFooter>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default MainRouter;