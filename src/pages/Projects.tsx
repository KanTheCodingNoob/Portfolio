import ProjectCard from "../components/ProjectCard.tsx";
import {useTranslation} from "react-i18next";

export default function Projects() {
    const {t} = useTranslation();

    return (
        <div className="w-full flex flex-col items-center space-y-4">
            <h1 className="font-bold text-4xl">{t('projects')}</h1>
            <div className="flex flex-wrap justify-center w-full gap-6 md:w-170 md:justify-between">
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
        </div>
    )
}