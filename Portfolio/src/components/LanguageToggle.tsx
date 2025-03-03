import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle: React.FC = () => {
	const { i18n } = useTranslation();

	const toggleLanguage = () => {
		const newLang = i18n.language === "en" ? "es" : "en";
		i18n.changeLanguage(newLang);
	};

	return (
		<div className="flex items-center space-x-2">
			<span
				className={`text-sm font-medium ${
					i18n.language === "es" ? "text-texto-enfasis" : "text-texto-principal"
				}`}
			>
				ES
			</span>
			<button
				onClick={toggleLanguage}
				className={`relative w-10 h-5  rounded-full p-1 transition-all flex items-center ${
					i18n.language === "en" ? "bg-texto-enfasis " : "bg-texto-principal"
				}`}
			>
				<div
					className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
						i18n.language === "en" ? "translate-x-4 " : "translate-x-0"
					}`}
				/>
			</button>
			<span
				className={`text-sm font-medium ${
					i18n.language === "en" ? "text-texto-enfasis" : "text-texto-principal"
				}`}
			>
				EN
			</span>
		</div>
	);
};

export default LanguageToggle;
