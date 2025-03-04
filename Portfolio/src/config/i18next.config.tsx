import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const getPreferredLanguage = () => {
	const savedLanguage = localStorage.getItem("language");
	if (savedLanguage) return savedLanguage;

	const browserLanguage = navigator.language.split("-")[0];
	return ["es", "en"].includes(browserLanguage) ? browserLanguage : "es";
};

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		lng: getPreferredLanguage(),
		fallbackLng: getPreferredLanguage(),
		// debug: true,
		interpolation: {
			escapeValue: false, // Desactiva el escape de caracteres
			format: (value, format) => {
				if (format === "tsx") {
					// Aquí devolvemos el valor como JSX, envolviendo en un componente React.
					return <>{value}</>;
				}
				return value;
			},
		},
	});

export default i18n;
