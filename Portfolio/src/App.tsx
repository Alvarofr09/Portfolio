import "./App.css";
import { Key, useEffect, useState } from "react";

import Card from "./components/Card";
import { CardProps } from "./components/Card";
import Nav from "./components/Nav";
import Link from "./components/Link";

import studies from "./data/studies.json";
import experience from "./data/experience.json";
//import projects from "./data/projects.json";

import { FaEye, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";

const navItems = [
	{ id: "about", title: "Sobre mi" },
	{ id: "studies", title: "Estudios" },
	{ id: "experience", title: "Experiencia" },
	{ id: "projects", title: "Proyectos" },
];
//https://brittanychiang.com/#about

// TODO: Subir curriculums a la carpeta public

function App() {
	const [activeSection, setActiveSection] = useState<string>("");

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
		<>
			<div className="  mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<header className="lg:sticky lg:top-0 lg:w-[46%] lg:flex lg:flex-col lg:max-h-screen lg:justify-between lg:py-24">
						<div>
							<h1 className="text-4xl text-texto-titulos font-bold sm:text-5xl">
								Alvaro Frias Ruiz
							</h1>
							<h2 className="text-2xl text-[#dbdfec] font-bold mt-3">
								Full Stack Developer
							</h2>
							<p className="mt-4 max-w-xs leading-normal">
								Desarrollador Web con ganas de trabajar y expandir mis
								conocimientos
							</p>
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
									Soy un <strong>desarrollador Full Stack</strong> con una gran
									pasión por la <strong>tecnología</strong>, especializado en
									<strong> Backend y Frontend</strong>. Me encanta aprender y
									afrontar nuevos retos, explorando diferentes{" "}
									<strong>herramientas</strong> y <strong>lenguajes</strong>{" "}
									para crear <strong>soluciones eficientes</strong>,{" "}
									<strong>escalables</strong> e <strong>innovadoras</strong> que
									aporten <strong>valor real</strong>.
								</p>
								<p className="mb-4">
									Cuento con excelentes habilidades de{" "}
									<strong>organización</strong> y{" "}
									<strong>trabajo en equipo</strong>, adaptándome fácilmente a
									diferentes entornos. Mi enfoque está en la{" "}
									<strong>resolución de problemas</strong> y en el{" "}
									<strong>desarrollo ágil</strong>, priorizando siempre la{" "}
									<strong>calidad</strong> y la{" "}
									<strong>optimización del código</strong> para obtener los
									mejores resultados.
								</p>
								<p className="mb-4">
									Actualmente, estoy profundizando en el mundo de la{" "}
									<strong>inteligencia artificial</strong> y el{" "}
									<strong>aprendizaje automático</strong>, explorando cómo estas{" "}
									<strong>tecnologías</strong> pueden integrarse en el{" "}
									<strong>desarrollo web</strong> y <strong>software</strong>.
									Me motiva el desafío de aprender nuevos{" "}
									<strong>paradigmas</strong> y aplicarlos en{" "}
									<strong>proyectos innovadores</strong>.
								</p>
								<p className="mb-4">
									Estoy en búsqueda activa de <strong>oportunidades</strong>{" "}
									como <strong>desarrollador web</strong>, donde pueda aplicar
									mis conocimientos y seguir creciendo profesionalmente. Me
									entusiasma la idea de formar parte de un{" "}
									<strong>equipo dinámico</strong> en el que pueda aportar mis{" "}
									<strong>habilidades</strong> y seguir evolucionando en este
									apasionante campo.
								</p>
							</div>
						</section>
						<section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
							<div className="flex gap-4">
								<a
									href=""
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 font-medium text-texto-titulos hover:text-texto-enfasis focus-visible:text-texto-enfasis"
								>
									<span>Ver curriculum</span>
									<FaEye className="h-4 w-4 " />
								</a>
								<a
									href="mailto:alvarofriasruiz03@gmail.com?subject=Consulta%20sobre%20tu%20perfil"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 font-medium text-texto-titulos hover:text-texto-enfasis focus-visible:text-texto-enfasis"
								>
									<span>Contactame </span>
									<MdEmail className="h-4 w-4 " />
								</a>
								<a
									href="https://mail.google.com/mail/?view=cm&fs=1&to=alvarofriasruiz03@gmail.com&su=Consulta%20sobre%20tu%20perfil"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 font-medium text-texto-titulos hover:text-texto-enfasis focus-visible:text-texto-enfasis"
								>
									<span>Contactame por gmail</span>
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
							<p>
								Esta página web fue diseñada en{" "}
								<Link href="https://www.canva.com/" text="Canva" /> y
								desarrollado en{" "}
								<Link
									href="https://code.visualstudio.com/"
									text="Visual Studio Code"
								/>{" "}
								hecho por mí. Desarrollado en{" "}
								<Link href="https://es.react.dev/" text="React" />,{" "}
								<Link
									href="https://www.typescriptlang.org/"
									text="Typescript"
								/>{" "}
								y <Link href="https://tailwindcss.com/" text="Tailwind" /> con{" "}
								<Link href="https://vitejs.dev/" text="Vite" />, desplegado en{" "}
								<Link href="https://vercel.com/" text="Vercel" /> y subido en{" "}
								<Link href="https://github.com/" text="GitHub." />
							</p>
						</footer>
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
