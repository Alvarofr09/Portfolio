import "./App.css";
import { Key, useEffect, useState, Suspense } from "react";

import Card from "./components/Card";
import { CardProps } from "./components/Card";
import Nav from "./components/Nav";
import Link from "./components/Link";
import Cursor from "./components/Cursor";

import studiesEs from "./data/studies_es.json";
import studiesEn from "./data/studies_en.json";
import experienceEs from "./data/experience_es.json";
import experienceEn from "./data/experience_en.json";
//import projectsEs from "./data/projects_es.json";
//import projectsEn from "./data/projects_en.json";

import { FaEye, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";

import { useTranslation, Trans } from "react-i18next";
import LanguageToggle from "./components/LanguageToggle";

//https://brittanychiang.com/#about

const getLocalizedData = (
	lang: string,
	esData: CardProps[],
	enData: CardProps[]
) => {
	return lang === "es" ? esData : enData;
};

function App() {
	const { t, i18n } = useTranslation(["principal"]);
	const [activeSection, setActiveSection] = useState<string>("about");
	const [studies, setStudies] = useState(
		getLocalizedData(i18n.language, studiesEs, studiesEn)
	);
	const [experience, setExperience] = useState(
		getLocalizedData(i18n.language, experienceEs, experienceEn)
	);

	const navItems = [
		{ id: "about", title: t("nav1") },
		{ id: "studies", title: t("nav2") },
		{ id: "experience", title: t("nav3") },
		{ id: "projects", title: t("nav4") },
	];

	useEffect(() => {
		setStudies(getLocalizedData(i18n.language, studiesEs, studiesEn));
		setExperience(getLocalizedData(i18n.language, experienceEs, experienceEn));
	}, [i18n.language]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		const sections = document.querySelectorAll("section");
		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);
	return (
		<Suspense fallback="Cargando traducciones">
			<div className="  mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
				<Cursor />
				<div className="lg:flex lg:justify-between lg:gap-4">
					<header className="lg:sticky lg:top-0 lg:w-[46%] lg:flex lg:flex-col lg:max-h-screen lg:justify-between lg:py-24">
						<div>
							<h1 className="text-4xl text-texto-titulos font-bold sm:text-5xl">
								Alvaro Frias Ruiz
							</h1>
							<h2 className="text-2xl text-[#dbdfec] font-bold mt-3">
								{t("role")}
							</h2>
							<p className="mt-4 max-w-xs leading-normal mb-4">
								{t("description")}
							</p>
							<LanguageToggle />
							<Nav items={navItems} activeSection={activeSection} />
						</div>

						<ul className="flex gap-6 ml-1 mt-6">
							<li>
								<a href="https://github.com/Alvarofr09" target="_blank">
									<FaGithub className="h-6 w-6" />
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/alvaro-frias-ruiz/"
									target="_blank"
								>
									<FaLinkedin className="h-6 w-6" />
								</a>
							</li>
						</ul>
					</header>
					<main id="content" className=" pt-24 lg:w-[54%] lg:py-24">
						<section id="about" className="scroll-mt-16 lg:scroll-mt-24">
							<div>
								<p className="mb-4">
									<Trans
										t={t}
										i18nKey="about.intro"
										components={{ strong: <strong /> }}
									/>
								</p>
								<p className="mb-4">
									<Trans
										t={t}
										i18nKey="about.skills"
										components={{ strong: <strong /> }}
									/>
								</p>
								<p className="mb-4">
									<Trans
										t={t}
										i18nKey="about.ai"
										components={{ strong: <strong /> }}
									/>
								</p>
								<p className="mb-4">
									<Trans
										t={t}
										i18nKey="about.job"
										components={{ strong: <strong /> }}
									/>
								</p>
							</div>
						</section>
						<section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
							<div className="flex gap-4">
								<a
									href={`${
										i18n.language === "es" ? "/CV_AFR_ES.pdf" : "/CV_AFR_EN.pdf"
									}`}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 font-medium text-texto-titulos hover:text-texto-enfasis focus-visible:text-texto-enfasis"
								>
									<span>{t("curriculum")}</span>
									<FaEye className="h-4 w-4 " />
								</a>
								<a
									href="mailto:alvarofriasruiz03@gmail.com?subject=Consulta%20sobre%20tu%20perfil"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 font-medium text-texto-titulos hover:text-texto-enfasis focus-visible:text-texto-enfasis"
								>
									<span>{t("contact")}</span>
									<MdEmail className="h-4 w-4 " />
								</a>
								<a
									href="https://mail.google.com/mail/?view=cm&fs=1&to=alvarofriasruiz03@gmail.com&su=Consulta%20sobre%20tu%20perfil"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 font-medium text-texto-titulos hover:text-texto-enfasis focus-visible:text-texto-enfasis"
								>
									<span>{t("gmail")}</span>
									<TbBrandGmail className="h-4 w-4 " />
								</a>
							</div>
						</section>
						<section
							id="studies"
							className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
						>
							<ol className="group/list">
								{studies.map(
									(item: CardProps, index: Key | null | undefined) => (
										<Card key={index} {...item} />
									)
								)}
							</ol>
						</section>
						<section
							id="experience"
							className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
						>
							<ol className="group/list">
								{experience.map(
									(item: CardProps, index: Key | null | undefined) => (
										<Card key={index} {...item} />
									)
								)}
							</ol>
						</section>

						<section
							id="projects"
							className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
						>
							<ol className="group/list">
								{/* {projects.map(
									(item: CardProps, index: Key | null | undefined) => (
										<Card key={index} {...item} />
									)
								)} */}
							</ol>
						</section>
						<footer className="max-w-md pb-16 text-sm text-salte-500 sm:pb-0">
							<p>{t("footer.description1")}</p>
						</footer>
					</main>
				</div>
			</div>
		</Suspense>
	);
}

export default App;
