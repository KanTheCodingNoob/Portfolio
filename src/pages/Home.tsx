import {Link} from "react-router-dom";
import {useState} from "react";
import ExperienceListCard from "../components/ExperienceListCard.tsx";
import Footer from "../components/Footer.tsx";
import {useTranslation} from "react-i18next";

function Home() {
	const [tab, setTab] = useState<string>("exp");

	const {t} = useTranslation();

	return (
		<div className="flex flex-col items-center w-full h-screen space-y-4">
			<div className="flex h-50 items-center space-x-4 justify-around">
				<div className="flex-1 w-120">
					<h1>{t('introHeader')}</h1> <br />
					<p>{t('introContent1')}</p>
					<p>{t('introContent2')}</p>
					<div className="space-x-3">
						<Link to={"/resume.pdf"} target={"_blank"}>
							Resume
						</Link>
						<Link to={"https://github.com/KanTheCodingNoob"} target={"_blank"}>
							Github
						</Link>
						<Link to={"https://www.linkedin.com/in/khanh-an-nguyen-b1433619a/"} target={"_blank"}>
							LinkedIn
						</Link>
					</div>
				</div>
				<div className="flex-1 border">
					<h1>Placeholder Image</h1>
				</div>
			</div>
			<div className="space-y-4 flex flex-col items-center w-120">
				<div className="space-x-5 flex w-full justify-around">
					<button className="cursor-pointer" onClick={()=>setTab("exp")}>{t('experience')}</button>
					<button className="cursor-pointer" onClick={()=>setTab("edu")}>{t('education')}</button>
				</div>
				{
					tab === "edu" && <div>
						<ExperienceListCard
							imageURL = "companyLogo/RMITLogo.png"
							companyURL = "https://www.rmit.edu.vn/"
							time = "09/2023 - 07/2027 (expected)"
							name = "RMIT Univerity"
							role = {t("degree")}
							descriptions = {t('eduInfo', {returnObjects: true }) as string[]}
						/>
					</div>
				}
				{
					tab === "exp" && <div>
						<ExperienceListCard
							imageURL="companyLogo/DataAnnotationLogo.jpg"
							companyURL="https://www.dataannotation.tech/"
							time="05/2023 - Current"
							name="DataAnnotation"
							role={t('DAJobTitle')}
							descriptions={t('DADescription', {returnObjects: true }) as string[]}
						/>
					</div>
				}
			</div>
			<div className="flex flex-col items-center w-full">
				<h1 className="font-bold">{t('technologies')}</h1>
				<h2>{t('languages')}</h2>
				<ul className="flex space-x-2">
					<li><img src="/languageIcon/cpp.png" height="60" width="60" alt="C++"/></li>
					<li><img src="/languageIcon/rust.png" height="60" width="60" alt="Rust"/></li>
					<li><img src="/languageIcon/typescript.png" height="60" width="60" alt="Typescript"/></li>
					<li><img src="/languageIcon/python.png" height="60" width="60" alt="Python"/></li>
					<li><img src="/languageIcon/java.png" height="60" width="60" alt="Java"/></li>
				</ul>
				<h2>Frameworks</h2>
				<ul className="flex space-x-2">
					<li><img src="/languageIcon/react.png" height="60" width="60" alt="React"/></li>
					<li><img src="/languageIcon/tauri.png" height="60" width="60" alt="Tauri"/></li>
					<li><img src="/languageIcon/spring.png" height="60" width="60" alt="Spring"/></li>
					<li><img src="/languageIcon/tailwind.png" height="60" width="60" alt="Tailwind"/></li>
				</ul>
			</div>
			<Footer />
		</div>
	)
}

export default Home
