import React from "react";

interface Props {
	technologies: string[];
}

const Technologies: React.FC<Props> = ({ technologies }) => {
	return (
		<ul className="flex flex-wrap gap-2 mt-2">
			{technologies.map((technology, index) => (
				<li
					key={index}
					className="border border-texto-enfasis/20  bg-texto-enfasis/20 text-texto-enfasis px-4 py-1 rounded-full mr-1.5 mt-2"
				>
					{technology}
				</li>
			))}
		</ul>
	);
};

export default Technologies;
