import ProjectCard from "../components/ProjectCard.tsx";
import Footer from "../components/Footer.tsx";

export default function Projects() {
    return (
        <div className="flex flex-col w-full items-center space-y-4">
            <h1>My projects</h1>
            <div className="flex flex-wrap justify-between w-160">
                <ProjectCard
                    image={"projectImage/EventManagement.png"}
                    name={"Event Management Application"}
                    description={"A web application for joining, hosting and managing event."}
                    techStack={["Typescript", "ReactJS", "TailwindCSS", "ExpressJS", "MongoDB"]}
                    link={[{title: "Github", link: "https://github.com/Group-tam/full-stack-development"}]}
                />
                <ProjectCard
                    image={"projectImage/InventoryManagement.png"}
                    name={"Thao Inventory Management"}
                    description={"A desktop application for local inventory management with import feature from XLSX to SQL tables."}
                    techStack={["Typescript", "React", "Rust", "Tauri"]}
                    link={[{title: "Github", link: "https://github.com/KanTheCodingNoob/thao-management"}]}
                />
            </div>
            <Footer />
        </div>
    )
}