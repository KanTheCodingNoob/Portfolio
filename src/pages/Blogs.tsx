import BlogCard from "../components/BlogCard.tsx";
import Footer from "../components/Footer.tsx";

export default function Blogs(){
    return (
        <div className="flex flex-col items-center w-full h-screen space-y-4">
            <h1>Blogs</h1>
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