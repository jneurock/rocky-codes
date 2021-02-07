import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="container__content-wrapper flex flex-space-between">
        <div className="site-footer__description">
          <p>
            &copy; 2021 - Rocky Neurock
          </p>
          <p>
            I&rsquo;m an experienced software development lead and web app
            developer living in Berlin. I enjoy leading teams, mentoring and
            growing developers, working on web app infrastructure and API
            design and building tools for my teams and organizations.
          </p>
        </div>
        {/* TODO: Add social icons */}
        <ul className="site-footer__social-menu">
          <li className="site-footer__social-menu-item">
            <a href="https://linkedin.com/in/jneurock">
              LinkedIn
            </a>
          </li>
          <li className="site-footer__social-menu-item">
            <a href="https://github.com/jneurock">
              GitHub
            </a>
          </li>
          <li className="site-footer__social-menu-item">
            <a href="https://twitter.com/rockyneurock">
              Twitter
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
