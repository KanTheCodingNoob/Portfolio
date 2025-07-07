export type Link = {
	title: string;
	link: string;
}

type ProjectInfo = {
	image: string,
	name: string,
	description: string,
	techStack: string[],
	link: Link[],
}

export default function ProjectCard({image, name, description, techStack, link}: ProjectInfo) {
	return (
		<div className="border-2 border-gray-200 rounded-lg w-76 p-5 space-y-4">
			<img src={image} alt={name} className="w-64 h-36 shadow-md"/>
			<h1 className="font-bold">{name}</h1>
			<p>{description}</p>
			<ul className="flex flex-wrap gap-x-2 gap-y-1">
				{techStack.map((item, i) => (
					<li key={i} className="bg-gray-200 rounded-lg px-1">
						{item}
					</li>
				))}
			</ul>
			<ul className="flex flex-wrap">
				{link.map((item, i) => (
					<li key={i} className="bg-black text-white rounded-lg px-1">
						<a href={item.link} target="_blank">
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}