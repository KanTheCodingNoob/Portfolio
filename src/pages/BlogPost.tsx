import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useTranslation } from "react-i18next"

export default function BlogPost() {
    const { slug } = useParams()
    const { i18n } = useTranslation();

    const [content, setContent] = useState("")

    useEffect(() => {
        fetch(`/blogPosts/${slug}.${i18n.language}.md`)
            .then((res) => res.text())
            .then(setContent)
            .catch(() => setContent("Post not found."))
    }, [slug, i18n.language])

    return (
        <div className="prose-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
    )
}
