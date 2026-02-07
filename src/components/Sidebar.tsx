import {useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useThemeContext} from "../contexts/themeContext.ts";

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {t} = useTranslation();
    const {theme} = useThemeContext();

    return (
        <div>
            {/* Burger button */}
            <button
                className="cursor-pointer fixed top-4 left-4 z-50 md:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            </button>

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 w-40 
               ${theme === 'dark' ? 'bg-slate-950' : 'bg-gray-200'}
               ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
               h-screen z-40 shadow-2xl transition-transform duration-300 transform md:hidden`}>
                <ul className="flex flex-col space-y-4 px-6 py-4 text-xl mt-12">
                    <li><Link to="/" onClick={() => setIsSidebarOpen(false)}>{t('home')}</Link></li>
                    <li><Link to="/projects" onClick={() => setIsSidebarOpen(false)}>{t('projects')}</Link></li>
                    <li><Link to="/blogs" onClick={() => setIsSidebarOpen(false)}>{t('blogs')}</Link></li>
                    <li><Link to="/contact" onClick={() => setIsSidebarOpen(false)}>{t('contact')}</Link></li>
                </ul>
            </aside>
        </div>
    )
}