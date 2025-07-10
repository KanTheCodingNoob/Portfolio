import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.tsx";

const Layout = () => (
    <>
        <Navigation />
        <div className="mt-20 flex flex-col items-center w-full h-screen">
            <main className="w-120 md:w-150 lg:w-200">
                <Outlet />
            </main>
        </div>
    </>
)

export default Layout;