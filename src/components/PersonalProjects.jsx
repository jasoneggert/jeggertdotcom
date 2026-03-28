import React from "react";
import { personalProjects, profile } from "../data/portfolio";

function PersonalProjects() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: will fix later
		<section className="section" id="projects">
			<div className="section__heading">
				<p className="eyebrow">Personal work</p>
				<h2>Experiments, products, and side projects. (Under renovation)</h2>
			</div>
			<div className="personal-projects">
				{personalProjects.map((project) => (
					<article className="project-tile" key={project.name}>
						<div className={`project-tile__media ${project.accent}`}>
							<div className="project-tile__placeholder" aria-hidden="true">
								<span>{project.name}</span>
							</div>
						</div>
						<div className="project-tile__content">
							<h3>{project.name}</h3>
							<p>{project.summary}</p>
							{project.link ? (
								<a href={project.link} target="_blank" rel="noreferrer">
									{project.cta}
								</a>
							) : null}
						</div>
					</article>
				))}
			</div>
			<div className="projects-footer-link">
				<a
					href="https://jasoneggert.github.io/"
					target="_blank"
					rel="noreferrer"
				>
					More small projects on GitHub Pages
				</a>
				<a href={profile.github} target="_blank" rel="noreferrer">
					GitHub profile
				</a>
			</div>
		</section>
	);
}

export default PersonalProjects;
