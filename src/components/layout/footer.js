import React from 'react';
import SocialMenu from '../social-menu';

export default function Footer() {
  return (
    <footer class="site-footer">
      <section
        class="container__content-wrapper flex flex--space-between flex--wrap"
      >
        <div class="content site-footer__description">
          <p>
            I&rsquo;m an experienced software development lead and web app
            developer living in Berlin. I enjoy leading teams, mentoring and
            growing developers, working on web app infrastructure and API
            design and building tools for my teams and organizations.
          </p>
          <p class="margin-btm-0">
            &copy; 2021 - Rocky Neurock
          </p>
        </div>
        <div>
          <p class="margin-btm-0">
            Let&rsquo;s Connect
          </p>
          <SocialMenu />
        </div>
      </section>
    </footer>
  );
}
