import React from "react";
import Technologies from "./Technologies";

export interface CardProps {
	isProject: boolean;
	duration?: string;
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
	duration,
	role,
	enterprise,
	description,
	technologies,
	image,
	links,
}) => {
	return (
		<div className="mb-10 group grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
			<header className="sm:col-span-2">
				{isProject ? (
					<img src={image} alt="{enterprise}_image" />
				) : (
					<span>{duration}</span>
				)}
			</header>
			<div className="sm:col-span-6">
				<h3>
					<div></div>
					<a
						href={isProject ? links.enterprise : links.github}
						className="group-hover:text-red-600"
					>
						<span>
							{role} · <span>{enterprise}</span>
						</span>
					</a>
				</h3>
				<p className="mt-2">{description}</p>
				{/* <ul>
					<li></li>
				</ul> */}
				<Technologies technologies={technologies} />
			</div>
		</div>
	);
};

export default Card;
