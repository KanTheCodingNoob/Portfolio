import ProjectCard from "../components/ProjectCard.tsx";
import Footer from "../components/Footer.tsx";
import {useTranslation} from "react-i18next";

export default function Projects() {
    const {t} = useTranslation();

    return (
        <div className="flex flex-col w-full items-center space-y-4">
            <h1>{t('projects')}</h1>
            <div className="flex flex-wrap justify-between w-160">
                <ProjectCard
                    image={"projectImage/EventManagement.png"}
                    name={t('EMA')}
                    description={t('EMADescription')}
                    techStack={["Typescript", "ReactJS", "TailwindCSS", "ExpressJS", "MongoDB"]}
                    link={[{title: "Github", link: "https://github.com/Group-tam/full-stack-development"}]}
                />
                <ProjectCard
                    image={"projectImage/InventoryManagement.png"}
                    name={t('TIM')}
                    description={t('TIMDescription')}
                    techStack={["Typescript", "React", "Rust", "Tauri"]}
                    link={[{title: "Github", link: "https://github.com/KanTheCodingNoob/thao-management"}]}
                />
            </div>
            <Footer />
        </div>
    )
}