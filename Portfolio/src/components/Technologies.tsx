import React from "react";

interface Props {
	technologies: string[];
}

const Technologies: React.FC<Props> = ({ technologies }) => {
	return (
		<ul className="flex flex-wrap gap-2 mt-2">
			{technologies.map((technology) => (
				<li className="border border-[#e5e7eb] bg-[#e5e7eb] text-red-600 px-4 py-1 rounded-full mr-1.5 mt-2">
					{technology}
				</li>
			))}
		</ul>
	);
};

export default Technologies;
