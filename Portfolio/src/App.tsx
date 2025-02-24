import "./App.css";
import Card from "./components/Card";

//https://brittanychiang.com/#about Portfolio a seguir

function App() {
	return (
		<>
			<div>
				<div>
					<header>
						<div>
							<h1>Alvaro Frias</h1>
							<h2>Full Stack Developer</h2>
							<p>Texto a poner</p>
							<nav>
								<ul>
									<li>
										<a href="#about">
											<span></span>
											<span></span>
										</a>
									</li>
									<li>
										<a href="#experience">
											<span></span>
											<span></span>
										</a>
									</li>
									<li>
										<a href="#projects">
											<span></span>
											<span></span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<ul>
							<li>
								<a href=""></a>
							</li>
							<li>
								<a href=""></a>
							</li>
							<li>
								<a href=""></a>
							</li>
						</ul>
					</header>
					<main>
						<section id="about">
							<div>
								<p></p>
							</div>
						</section>
						<section id="experience">
							<Card />
							<Card />
						</section>
						<section id="projects"></section>
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
