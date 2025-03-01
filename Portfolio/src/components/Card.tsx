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
		<li className="mb-12">
			<div className="relative group grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
				<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-4 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

				<header className=" z-10 sm:col-span-2">
					{isProject ? (
						<img src={image} alt={`${enterprise}_image`} />
					) : (
						<span className="uppercase">{duration}</span>
					)}
				</header>
				<div className="z-10 sm:col-span-6">
					<h3 className="font-medium leading-snug text-texto-titulos">
						<div></div>
						<a
							href={isProject ? links.github : links.enterprise}
							className="group-hover:text-texto-enfasis"
						>
							<span>
								{role} · <span>{enterprise}</span>
							</span>
						</a>
					</h3>
					<p className="mt-2 text-sm leading-normal">{description}</p>
					<Technologies technologies={technologies} />
				</div>
			</div>
		</li>
	);
};

export default Card;
