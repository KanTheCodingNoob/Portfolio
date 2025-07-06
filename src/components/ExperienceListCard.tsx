type CardInfo = {
	imageURL: string;
	companyURL: string;
	time: string;
	name: string;
	role: string;
	descriptions: string[];
};

export default function ExperienceListCard({
	                                           imageURL,
	                                           companyURL,
	                                           time,
	                                           name,
	                                           role,
	                                           descriptions,
                                           }: CardInfo){
	return(
		<div className="flex w-120">
			<div className="h-full w-20 flex-shrink-0 py-2">
				<a href={companyURL} target="_blank">
					<img src={imageURL} alt={name}
					     className="h-14 w-14 rounded-4xl"
					/>
				</a>
			</div>
			<div>
				<h2>{time}</h2>
				<h1 className="font-bold">{name}</h1>
				<h2>{role}</h2>
				<ul className="list-disc ml-4">
					{descriptions.map((description, index) => (
						<li key={index}>{description}</li>
					))}
				</ul>
			</div>
		</div>
	)
}