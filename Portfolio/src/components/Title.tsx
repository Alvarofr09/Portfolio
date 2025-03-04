import React from "react";

interface TitleProps {
	text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
	return (
		<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
			<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
				{text}
			</h2>
		</div>
	);
};

export default Title;
