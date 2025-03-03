import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		fallbackLng: "es",
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
