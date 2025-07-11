import Footer from "../components/Footer.tsx";
import {useTranslation} from "react-i18next";
import {useThemeContext} from "../contexts/themeContext.ts";

export default function Contact() {
    const {t} = useTranslation();
    const {theme} = useThemeContext();

    return (
        <div className="w-full flex flex-col items-center space-y-4">
            <h1 className="font-bold text-4xl">{t('contactHeader')}</h1>
            <div className="flex space-x-4 flex-col w-full gap-4">
                <form className="space-y-4" action="https://formspree.io/f/myzjqwdl" method="post">
                    <h1 className="font-bold text-2xl">{t('formHeader')}</h1>
                    <div className="w-full flex gap-4 justify-between">
                        <input type="name" name="name" placeholder={t('name')} className="border border-gray-500 w-full px-2 rounded"/>
                        <input type="email" name="email" placeholder="Email" className="border border-gray-500 w-full px-2 rounded"/>
                    </div>
                    <textarea
                        name="message"
                        className="border border-gray-500 w-full h-20 px-2 rounded"
                        placeholder={t('textAreaPlaceholder')}
                    />
                    <button
                        type="submit"
                        className={`cursor-pointer rounded px-2 transition duration-300 ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-900' : 'bg-gray-300 hover:bg-gray-600'}`}
                    >
                        {t('send')}
                    </button>
                </form>
                <div className="text-sm text-gray-600">
                    <h1 className="font-bold">{t('contactInfo')}</h1>
                    <h2>Email: annguyen.221105sc@gmail.com</h2>
                    <h2>{t('phone')}: (+84) 862 711 602</h2>
                    <h2>{t('location')}: {t('actualLocation')}</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}