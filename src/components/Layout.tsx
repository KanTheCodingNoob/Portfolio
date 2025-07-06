import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.tsx";

const Layout = () => (
    <>
        <Navigation />
        <div className="mt-16 px-4">
            <main>
                <Outlet />
            </main>
        </div>
    </>
)

export default Layout;