import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function BlogPost() {
    const { slug } = useParams()
    const [content, setContent] = useState("Loading...")

    useEffect(() => {
        fetch(`/public/blogPosts/${slug}.md`)
            .then((res) => res.text())
            .then(setContent)
            .catch(() => setContent("Post not found."))
    }, [slug])

    return (
        <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
    )
}
