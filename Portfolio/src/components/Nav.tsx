import React, { Key } from "react";

interface NavItem {
	id: string;
	title: string;
}

interface NavProps {
	items: NavItem[];
}

const Nav: React.FC<NavProps> = ({ items }) => {
	return (
		<nav className="nav hidden lg:block">
			<ul className="mt-16 w-max">
				{items.map((item: NavItem, index: Key | null | undefined) => (
					<li key={index}>
						<a href={`#${item.id}`} className="group flex items-center py-3">
							<span className="mr-4 h-0.5 w-8 bg-[#e5e7eb] group-hover:bg-white group-hover:w-16 transition-all"></span>
							<span className="uppercase group-hover:text-white">
								{item.title}
							</span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
