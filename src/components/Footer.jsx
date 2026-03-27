import React from "react";
import { profile } from "../data/portfolio";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__content">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Interested in product, design, or engineering leadership?</h2>
          <a className="button button--primary" href={`mailto:${profile.email}`}>
            Let&apos;s talk
          </a>
        </div>
        <div className="footer__links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
