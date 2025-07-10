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
		<div className="border border-gray-500 rounded-lg w-80 p-5 space-y-4">
			<img src={image} alt={name} className="w-64 h-36 shadow-md mx-auto"/>
			<h1 className="font-bold h-12">{name}</h1>
			<p className="h-24">{description}</p>
			<div className="h-20">
				<ul className="flex flex-wrap gap-x-2 gap-y-1">
					{techStack.map((item, i) => (
						<li key={i} className="bg-gray-200 text-black rounded-lg px-1">
							{item}
						</li>
					))}
				</ul>
			</div>
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