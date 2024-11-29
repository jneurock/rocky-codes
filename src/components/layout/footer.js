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
            I&rsquo;m an experienced, people-centric software engineering leader
            currently living in Sweden. Great experiences &mdash; for my team
            and their users &mdash; are what drive me.
          </p>
          <p className="margin-btm-0">
            &copy; Rocky Neurock
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
