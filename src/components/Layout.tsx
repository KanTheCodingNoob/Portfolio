import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.tsx";
import Footer from "./Footer.tsx";

const Layout = () => (
    <>
        <Navigation />
        <div className="mt-20 flex flex-col items-center w-full">
            <main className="w-80 md:w-160 lg:w-200">
                <Outlet />
            </main>
        </div>
        <Footer />
    </>
)

export default Layout;