import Footer from "../components/Footer.tsx";
import {useTranslation} from "react-i18next";

export default function Contact() {
    const {t} = useTranslation();

    return (
        <div className="flex flex-col items-center w-full h-screen space-y-4">
            <h1>{t('contactHeader')}</h1>
            <div className="flex space-x-4">
                <div>
                    <h1>{t('Contact Info')}</h1>
                    <h2>Email: annguyen.221105sc@gmail.com</h2>
                    <h2>{t('phone')}: (+84) 862 711 602</h2>
                    <h2>{t('location')}: {t('actualLocation')}</h2>
                </div>
                <form className="space-y-4" action="https://formspree.io/f/myzjqwdl" method="post">
                    <h1>{t('formHeader')}</h1>
                    <input type="name" name="name" placeholder={t('name')} className="border mr-1"/>
                    <input type="email" name="email" placeholder="Email" className="border ml-1"/>
                    <br />
                    <textarea
                        name="message"
                        className="border w-full h-20"
                        placeholder={t('textAreaPlaceholder')}
                    />
                    <button
                        type="submit"
                        className="cursor-pointer"
                    >
                        {t('send')}
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}