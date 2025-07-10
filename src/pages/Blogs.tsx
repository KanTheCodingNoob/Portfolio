import BlogCard from "../components/BlogCard.tsx";
import Footer from "../components/Footer.tsx";
import {useTranslation} from "react-i18next";

export default function Blogs(){
    const {t} = useTranslation();
    return (
        <div className="w-full flex flex-col items-center space-y-4">
            <h1 className="font-bold text-4xl">{t('blogs')}</h1>
            <div className="w-148 border border-gray-700 rounded-xl divide-y py-1">
                <BlogCard
                    title={"Launch of the portfolio website"}
                    description={"Celebrate the launch of my first website, plus discussion on my plan in term of projects"}
                    postDate={"15 July 2025"}
                    url={"/"}
                />
            </div>
            <Footer />
        </div>
    )
}