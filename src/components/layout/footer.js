import React from 'react';
import SocialMenu from '../social-menu';

export default function Footer() {
  return (
    <footer className="site-footer">
      <section
        className="container__content-wrapper flex flex--space-between flex--wrap"
      >
        <div className="content site-footer__description">
          <p>
            I&rsquo;m an experienced software development lead and web app
            developer living in Berlin. I enjoy leading teams, mentoring and
            growing developers, working on web app infrastructure and API
            design and building tools for my teams and organizations.
          </p>
          <p className="margin-btm-0">
            &copy; 2021 - Rocky Neurock
          </p>
        </div>
        <div className="site-footer__connect">
          <p className="margin-btm-0">
            Let&rsquo;s Connect
          </p>
          <SocialMenu />
        </div>
      </section>
    </footer>
  );
}
