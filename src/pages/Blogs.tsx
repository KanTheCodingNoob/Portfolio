import BlogCard from "../components/BlogCard.tsx";
import {useTranslation} from "react-i18next";

export default function Blogs(){
    const {t} = useTranslation();

    const posts = [
        { title: "Launch of the portfolio page 🎉",
            slug: "portfolioLaunch",
            description: "Celebrate the launch of my first website, plus discussion on my plan in term of projects",
            date: "11-07-2025",
        }
    ]

    return (
        <div className="w-full flex flex-col items-center space-y-4">
            <h1 className="font-bold text-4xl">{t('blogs')}</h1>
            <div className="w-full border border-gray-700 rounded-xl divide-y py-1">
                {posts.map((post) => (
                    <BlogCard
                        key={post.slug}
                        title={post.title}
                        description={"Celebrate the launch of my first website, plus discussion on my plan in term of projects"}
                        postDate={"15 July 2025"}
                        url={`/blogs/${post.slug}`}
                    />
                ))}
            </div>
        </div>
    )
}