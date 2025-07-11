import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18n, {changeLanguage} from "i18next";
import {useThemeContext} from "../contexts/themeContext.ts";

export default function Navigation() {
    const {t} = useTranslation();
    const {theme, setTheme} = useThemeContext();

    return (
        <nav className="flex justify-center w-full h-16 text-2xl fixed top-0 left-0 px-2 backdrop-blur z-50">
            <div className="flex justify-between items-center w-240">
                <div>
                    <ul className="flex space-x-6 items-center justify-between text-2xl">
                        <li><Link to={"/"}>{t('home')}</Link></li>
                        <li><Link to={"/projects"}>{t('projects')}</Link></li>
                        <li><Link to={"/blogs"}>{t('blogs')}</Link></li>
                        <li><Link to={"/contact"}>{t('contact')}</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-4 items-center justify-between">
                        <li>
                            {i18n.language === 'en' && <button
                                className="cursor-pointer"
                                onClick={()=> changeLanguage('vi')}
                            >🇻🇳 VI</button>}
                            {i18n.language === 'vi' && <button
                                className="cursor-pointer"
                                onClick={()=> changeLanguage('en')}
                            >🇺🇸 EN</button>}
                        </li>
                        <li>
                            <button
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                className="cursor-pointer mt-1.5"
                            >
                                {
                                    theme === 'dark' ?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
                                        </svg>
                                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                               stroke-width="1.5" stroke="currentColor" className="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
                                        </svg>
                                }

                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}