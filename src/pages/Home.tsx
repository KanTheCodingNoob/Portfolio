import {Link} from "react-router-dom";
import {useState} from "react";
import ExperienceListCard from "../components/ExperienceListCard.tsx";
import Footer from "../components/Footer.tsx";
import {useTranslation} from "react-i18next";
import {useThemeContext} from "../contexts/themeContext.ts";

function Home() {
	const [tab, setTab] = useState<string>("exp");
    const {theme} = useThemeContext();

	const {t} = useTranslation();

	return (
		<div className="w-full flex flex-col items-center space-y-4">
            <div className="w-full text-center md:text-left">
                <h1 className="font-bold text-4xl">{t('introHeader')}</h1> <br />
                <p className="text-2xl">{t('introContent1')}</p>
                <p className="text-2xl">{t('introContent2')}</p>
                <div className="space-x-3 mt-5">
                    <Link to={"/resume.pdf"} target={"_blank"}
                          className="inline-flex border rounded px-1 py-0.5 gap-1 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="size-6">
                            <path fill-rule="evenodd"
                                  d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                                  clip-rule="evenodd"/>
                            <path
                                d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"/>
                        </svg>
                        <p>Resume</p>
                    </Link>
                    <Link to={"https://github.com/KanTheCodingNoob"} target={"_blank"}
                          className="inline-flex border rounded px-1 py-0.5 gap-1 font-bold">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-slate-900">
                            <path fill="currentColor" clip-rule="evenodd"
                                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                        </svg>
                        <p>Github</p>
                    </Link>
                    <Link to={"https://www.linkedin.com/in/khanh-an-nguyen-b1433619a/"} target={"_blank"}
                          className="inline-flex border rounded px-1 py-0.5 gap-1 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="size-6">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect width="4" height="12" x="2" y="9"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                        <p>LinkedIn</p>
                    </Link>
                    <Link to={"mailto:annguyen.221105sc@gmail.com"} target={"_blank"}
                          className="inline-flex border rounded px-1 py-0.5 gap-1 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        <p>Email</p>
                    </Link>
                </div>
            </div>
            <div className="space-y-4 flex flex-col w-full">
                <div className={`border border-gray-500 space-x-5 py-3 px-3 rounded-md flex w-full justify-around ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}>
                    <button className={`cursor-pointer rounded-md w-full h-9 transition-all duration-300  ${tab === 'exp'
                        ? theme === 'dark' 
                            ? 'bg-gray-600 text-white'
                            : 'bg-white text-black'
                        : 'bg-transparent'}`} onClick={() => setTab("exp")}>{t('experience')}</button>
                    <button className={`cursor-pointer rounded-md w-full h-9 transition-all duration-300 ${tab === 'edu'
                        ? theme === 'dark'
                            ? 'bg-gray-600 text-white'
                            : 'bg-white text-black'
                        : 'bg-transparent'}`} onClick={() => setTab("edu")}>{t('education')}</button>
                </div>
                <div className={`border border-gray-500 rounded-md px-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}>
                    {
                        tab === "edu" && <>
                            <ExperienceListCard
                                imageURL = "companyLogo/RMITLogo.png"
                                companyURL = "https://www.rmit.edu.vn/"
                                time = "09/2023 - 07/2027 (expected)"
                                name = "RMIT Univerity"
                                role = {t("Degree")}
                                descriptions = {t('EduInfo', {returnObjects: true }) as string[]}
                            />

                        </>
                    }
                    {
                        tab === "exp" && <>
                            <ExperienceListCard
                                imageURL="companyLogo/DataAnnotationLogo.jpg"
                                companyURL="https://www.dataannotation.tech/"
                                time="05/2023 - Current"
                                name="DataAnnotation"
                                role={t('DAJobTitle')}
                                descriptions={t('DADescription', {returnObjects: true }) as string[]}
                            />
                        </>
                    }
                </div>
			</div>
			<div className="flex flex-col items-center w-full space-y-4">
				<h1 className="font-bold text-4xl">{t('technologies')}</h1>
				<h2 className="font-bold text-2xl">{t('languages')}</h2>
				<ul className="flex space-x-4">
					<li><img src="/languageIcon/cpp.png" height="60" width="60" alt="C++"/></li>
					<li><img src="/languageIcon/rust.png" height="60" width="60" alt="Rust"/></li>
					<li><img src="/languageIcon/typescript.png" height="60" width="60" alt="Typescript"/></li>
					<li><img src="/languageIcon/python.png" height="60" width="60" alt="Python"/></li>
					<li><img src="/languageIcon/java.png" height="60" width="60" alt="Java"/></li>
				</ul>
				<h2 className="font-bold text-2xl">Frameworks</h2>
				<ul className="flex space-x-4">
					<li><img src="/languageIcon/react.png" height="60" width="60" alt="React"/></li>
					<li><img src="/languageIcon/tauri.png" height="60" width="60" alt="Tauri"/></li>
					<li><img src="/languageIcon/spring.png" height="60" width="60" alt="Spring"/></li>
					<li><img src="/languageIcon/tailwind.png" height="60" width="60" alt="Tailwind"/></li>
                    <li><img src="/languageIcon/pytorch.svg" height="60" width="60" alt="PyTorch"/></li>
                </ul>
			</div>
			<Footer />
		</div>
	)
}

export default Home
