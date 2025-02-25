import "./App.css";
import Card from "./components/Card";
import experience from "./data/experience.json";
//import projects from "./data/projects.json";

import { CardProps } from "./components/Card";
import { Key } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

//https://brittanychiang.com/#about Portfolio a seguir

function App() {
	return (
		<>
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0 bg-amber-300">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<header className="bg-morado-1 lg:sticky lg:top-0 lg:w-[46%] lg:flex lg:flex-col lg:max-h-screen lg:justify-between lg:py-24">
						<div>
							<h1>Alvaro Frias</h1>
							<h2>Full Stack Developer</h2>
							<p>Texto a poner</p>
							<nav>
								<ul>
									<li>
										<a href="#about">
											<span></span>
											<span>Sobre mi</span>
										</a>
									</li>
									<li>
										<a href="#experience">
											<span></span>
											<span>Experiencia</span>
										</a>
									</li>
									<li>
										<a href="#projects">
											<span></span>
											<span>Proyectos</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<ul className="flex gap-4">
							<li>
								<a href="https://github.com/Alvarofr09" target="_blank">
									<FaGithub />
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/alvaro-frias-ruiz/"
									target="_blank"
								>
									<FaLinkedin />
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/alvarofr09/" target="_blank">
									<FaInstagram />
								</a>
							</li>
						</ul>
					</header>
					<main id="content" className="bg-verde-1 pt-24 lg:w-[54%] lg:py-24">
						<section id="about">
							<div>
								<p></p>
							</div>
						</section>
						<section>
							<div>
								<a href="" target="_blank" rel="noopener noreferrer">
									<span>Ver curriculum</span>
								</a>
								<a href="" target="_blank" rel="noopener noreferrer">
									<span>Contactame</span>
								</a>
							</div>
						</section>
						<section id="experience">
							{experience.map(
								(item: CardProps, index: Key | null | undefined) => (
									<Card key={index} {...item} />
								)
							)}
						</section>
						<section id="experience">
							{experience.map(
								(item: CardProps, index: Key | null | undefined) => (
									<Card key={index} {...item} />
								)
							)}
						</section>
						<section id="experience">
							{experience.map(
								(item: CardProps, index: Key | null | undefined) => (
									<Card key={index} {...item} />
								)
							)}
						</section>
						<section id="experience">
							{experience.map(
								(item: CardProps, index: Key | null | undefined) => (
									<Card key={index} {...item} />
								)
							)}
						</section>
						<section id="projects"></section>
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
