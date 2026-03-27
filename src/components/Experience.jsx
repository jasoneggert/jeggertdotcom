import React from "react";
import { experience } from "../data/portfolio";

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__heading">
        <p className="eyebrow">Work history</p>
        <h2>Roles across product, engineering, and UX.</h2>
      </div>
      <div className="experience-grid">
        {experience.map((item) => (
          <article className="experience-card" key={`${item.company}-${item.role}`}>
            <div className={`experience-card__media ${item.accent}`}>
              {item.image ? (
                <img src={item.image} alt={`${item.company} project screenshot`} />
              ) : (
                <div className="experience-card__placeholder" aria-hidden="true">
                  <span>{item.company}</span>
                </div>
              )}
            </div>
            <div className="experience-card__content">
              <p className="experience-card__role">{item.role}</p>
              <h3>{item.company}</h3>
              <p>{item.summary}</p>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  Visit site
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
