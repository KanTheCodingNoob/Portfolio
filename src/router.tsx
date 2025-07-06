import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Blogs from "./pages/Blogs.tsx";
import Contact from "./pages/Contact.tsx";
import LostTraveller from "./pages/LostTraveller.tsx";
import Layout from "./components/Layout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: "projects", element: <Projects />},
            {path: "blogs", element: <Blogs />},
            {path: "contact", element: <Contact />},
            {path: "*", element: <LostTraveller />}
        ]
    }
])

export default router;