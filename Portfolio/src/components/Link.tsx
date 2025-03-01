import React from "react";

interface LinkProps {
	href: string;
	text: string;
}

const Link: React.FC<LinkProps> = ({ href, text }) => {
	return (
		<a
			href={href}
			className="font-medium text-texto-titulos hover:text-texto-enfasis focus-visible:text-texto-enfasis"
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`${text} (New Tab)`}
		>
			{text}
		</a>
	);
};

export default Link;
