import { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useTranslation } from "react-i18next"
import {useThemeContext} from "../contexts/themeContext.ts";

export default function BlogPost() {
    const { slug } = useParams()
    const { i18n, t } = useTranslation();
    const {theme} = useThemeContext();

    const [content, setContent] = useState("")

    useEffect(() => {
        fetch(`/blogPosts/${slug}.${i18n.language}.md`)
            .then((res) => res.text())
            .then(setContent)
            .catch(() => setContent("Post not found."))
    }, [slug, i18n.language])

    return (
        <div className="prose-lg">
            <Link to={"/blogs"} className={`flex text-gray-500 gap-2 items-center ${theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-700'} transition duration-300 ease-in-out`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"/>
                </svg>
                <p>{t('blogRedirect')}</p>
            </Link>
            <img src={`/blogImages/${slug}.png`} alt="slug"/>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
    )
}
