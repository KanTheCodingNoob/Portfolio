import {Link} from "react-router-dom";

type BlogCardInfo = {
	title: string,
	description: string,
	postDate: string,
	url: string
}

export default function BlogCard({title, description, postDate, url}: BlogCardInfo){
	return (
		<Link to={url} className="flex flex-col md:flex-row justify-between space-x-4 px-2 py-1 items-center">
			<div>
				<h1 className="font-bold text-2xl">{title}</h1>
				<p>{description}</p>
			</div>
			<h4 className="min-w-24">{postDate}</h4>
		</Link>
	)
}