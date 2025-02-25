import React from "react";

export interface CardProps {
	isProject: boolean;
	role: string;
	enterprise: string;
	description: string;
	technologies: string[];
	image?: string;
	links: {
		enterprise?: string;
		github?: string;
		demo?: string;
	};
}

const Card: React.FC<CardProps> = ({
	isProject,
	role,
	enterprise,
	description,
	technologies,
	image,
	links,
}) => {
	return (
		<div>
			<header>
				{isProject ? <img src={image} alt="{enterprise}_image" /> : <h4></h4>}
			</header>
			<div>
				<h3>
					<div></div>
					<a href={isProject ? links.enterprise : links.github}>
						<span>
							{role} · <span>{enterprise}</span>
						</span>
					</a>
				</h3>
				<p>{description}</p>
				{/* <ul>
					<li></li>
				</ul> */}
				<ul>
					{technologies.map((technology) => (
						<li>{technology}</li>
					))}
					<li></li>
				</ul>
			</div>
		</div>
	);
};

export default Card;
