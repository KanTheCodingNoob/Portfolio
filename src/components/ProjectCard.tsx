type ProjectInfo = {
	image: string,
	name: string,
	description: string,
	techStack: string[],
	link: string[],
}

export default function ProjectCard({image, name, description, techStack, link}: ProjectInfo) {
	return (
		<div className="border-2 border-gray-200 rounded-lg">
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<p>{description}</p>
			<ul>
				{techStack.map((item, i) => (
					<li key={i} className="bg-gray-200 rounded-lg">
						{item}
					</li>
				))}
			</ul>
			<ul>
				{link.map((item, i) => (
					<li key={i} className="bg-gray-200 rounded-lg">
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}