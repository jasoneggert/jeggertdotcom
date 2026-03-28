import React from "react";
import eggLogo from "../assets/egg2.png";
import { profile } from "../data/portfolio";

function Hero() {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: its fine
		<section className="hero" id="top">
			<div className="hero__copy">
				<img className="hero__egg" src={eggLogo} alt="" aria-hidden="true" />
				<h1 className="hero__name">{profile.name}</h1>
				<p className="hero__title">{profile.title}</p>
				<p className="hero__intro">{profile.intro}</p>
				<div className="hero__actions">
					<a className="button button--primary" href="#experience">
						View work
					</a>
					<a
						className="button button--secondary"
						href={profile.linkedin}
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</a>
				</div>
			</div>
			<div className="hero__card">
				<img src={profile.image} alt="Jason Eggert portrait" />
				<div className="hero__meta">
					<span>{profile.location}</span>
					<a href={`mailto:${profile.email}`}>{profile.email}</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;
