import React from "react";
import { about, highlights, profile } from "../data/portfolio";

function About() {
  return (
    <section className="section section--split" id="about">
      <div className="section__heading">
        <p className="eyebrow">About</p>
        <h2>Built at the intersection of product, engineering, and design.</h2>
      </div>
      <div className="about">
        <div className="about__body">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a
            className="button button--secondary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            More on LinkedIn
          </a>
        </div>
        <div className="about__highlights">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.label}>
              <p>{item.label}</p>
              <h3>{item.value}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
