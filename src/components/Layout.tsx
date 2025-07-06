import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.tsx";

const Layout = () => (
    <>
        <Navigation />
        <div className="mt-16">
            <main className="px-4">
                <Outlet />
            </main>
        </div>
    </>
)

export default Layout;