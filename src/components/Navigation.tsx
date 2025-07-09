import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18n, {changeLanguage} from "i18next";
import {useThemeContext} from "../contexts/themeContext.ts";

export default function Navigation() {
    const {t} = useTranslation();

    const {theme, setTheme} = useThemeContext();

    return (
        <nav className="flex justify-between w-full fixed top-0 left-0 border px-2">
            <div>
                <ul className="flex gap-3 items-center justify-between">
                    <li><Link to={"/"}>{t('home')}</Link></li>
                    <li><Link to={"/projects"}>{t('projects')}</Link></li>
                    <li><Link to={"/blogs"}>{t('blogs')}</Link></li>
                    <li><Link to={"/contact"}>{t('contact')}</Link></li>
                </ul>
            </div>
            <div>
                <ul className="flex gap-3 items-center justify-between">
                    <li>
                        {i18n.language === 'en' && <button
                            className="cursor-pointer"
                            onClick={()=> changeLanguage('vi')}
                        >VI</button>}
                        {i18n.language === 'vi' && <button
                            className="cursor-pointer"
                            onClick={()=> changeLanguage('en')}
                        >EN</button>}
                    </li>
                    <li>
                        <button
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}