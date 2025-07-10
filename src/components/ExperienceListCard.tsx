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
		<div className="flex w-full items-stretch">
			<div className="relative flex w-20 flex-shrink-0 py-2 justify-center">
				{/* Vertical line – top segment */}
				<div className="absolute left-10 top-0 w-px bg-gray-500 opacity-50" style={{ height: '0.99' + 'rem' }} />

				{/* Vertical line – bottom segment */}
				<div className="absolute left-10 bottom-0 w-px bg-gray-500 opacity-50" style={{ top: '4.5rem' }} />
				<a href={companyURL} target="_blank">
					<img src={imageURL} alt={name}
					     className="h-14 w-14 rounded-4xl mt-2"
					/>
				</a>
			</div>
			<div className="py-2">
				<h2>{time}</h2>
				<h1 className="font-bold text-xl">{name}</h1>
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