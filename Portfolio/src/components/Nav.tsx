import React, { Key } from "react";

interface NavItem {
	id: string;
	title: string;
}

interface NavProps {
	items: NavItem[];
	activeSection: string;
}

const Nav: React.FC<NavProps> = ({ items, activeSection }) => {
	const handleClick = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<nav className="nav hidden lg:block">
			<ul className="mt-16 w-max">
				{items.map((item: NavItem, index: Key | null | undefined) => (
					<li key={index}>
						<button
							onClick={() => handleClick(item.id)}
							className={`group flex items-center py-3 ${
								activeSection === item.id
									? "text-texto-enfasis"
									: "text-texto-pricipal"
							}`}
						>
							<span
								className={`mr-4 h-0.5 w-8  group-hover:bg-texto-enfasis text-texto-enfasis group-hover:w-16 transition-all ${
									activeSection === item.id
										? "bg-texto-enfasis text-texto-enfasis w-16"
										: "bg-texto-principal w-8"
								}`}
							></span>
							<span className="uppercase group-hover:text-texto-enfasis">
								{item.title}
							</span>
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
