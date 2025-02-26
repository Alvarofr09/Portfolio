import "./App.css";
import Card from "./components/Card";
import experience from "./data/experience.json";
//import projects from "./data/projects.json";

import { CardProps } from "./components/Card";
import { Key } from "react";
import { FaEye, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Nav from "./components/Nav";
import { MdEmail } from "react-icons/md";

const navItems = [
	{ id: "content", title: "Sobre mi" },
	{ id: "experience", title: "Experiencia" },
	{ id: "projects", title: "Proyectos" },
];
//https://brittanychiang.com/#about Portfolio a seguir

function App() {
	return (
		<>
			<div className="  mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<header className="lg:sticky lg:top-0 lg:w-[46%] lg:flex lg:flex-col lg:max-h-screen lg:justify-between lg:py-24">
						<div>
							<h1 className="text-4xl font-bold sm:text-5xl">
								Alvaro Frias Ruiz
							</h1>
							<h2 className="text-2xl font-bold mt-3">Full Stack Developer</h2>
							<p className="mt-4 max-w-xs leading-normal">
								Desarrollador Web con ganas de trabajar y expandir mis
								conocimientos
							</p>
							<Nav items={navItems} />
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
							<li>
								<a href="https://www.instagram.com/alvarofr09/" target="_blank">
									<FaInstagram className="h-6 w-6" />
								</a>
							</li>
						</ul>
					</header>
					<main id="content" className=" pt-24 lg:w-[54%] lg:py-24">
						<section id="about" className="mb-12">
							<div>
								<p className="mb-4">
									{" "}
									Soy un desarrollador apasionado con un fuerte interés en la
									programación tanto Backend como Frontend, siempre con ganas de
									aprender y afrontar nuevos retos. Mi entusiasmo por la
									tecnología me impulsa a ampliar constantemente mis
									habilidades, dominando diversas herramientas y lenguajes para
									encontrar soluciones creativas y eficientes.
								</p>
								<p className="mb-4">
									{" "}
									Con excelentes habilidades de organización, trabajo bien en
									equipo y me adapto fácilmente a diferentes entornos. Tengo una
									mentalidad orientada a la consecución de objetivos y a la
									obtención de resultados de alta calidad.
								</p>
							</div>
						</section>
						<section className="mb-12">
							<div className="flex gap-4">
								<a
									href=""
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2"
								>
									<span>Ver curriculum</span>
									<FaEye className="h-4 w-4 " />
								</a>
								<a
									href=""
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2"
								>
									<span>Contactame </span>
									<MdEmail className="h-4 w-4 " />
								</a>
							</div>
						</section>
						<section id="experience" className="mb-12">
							{experience.map(
								(item: CardProps, index: Key | null | undefined) => (
									<Card key={index} {...item} />
								)
							)}
						</section>
						<section id="experience" className="mb-12">
							{experience.map(
								(item: CardProps, index: Key | null | undefined) => (
									<Card key={index} {...item} />
								)
							)}
						</section>
						<section id="experience" className="mb-12">
							{experience.map(
								(item: CardProps, index: Key | null | undefined) => (
									<Card key={index} {...item} />
								)
							)}
						</section>
						<section id="experience" className="mb-12">
							{experience.map(
								(item: CardProps, index: Key | null | undefined) => (
									<Card key={index} {...item} />
								)
							)}
						</section>
						<section id="projects" className="mb-12"></section>
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
