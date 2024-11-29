import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn as linkedInIcon,
  faGithub as gitHubIcon,
  faMastodon as mastodonIcon
} from '@fortawesome/free-brands-svg-icons';

export default function SocialMenu() {
  return (
    <ul className="flex social-menu">
      <li className="social-menu__item">
        <a
          href="https://linkedin.com/in/jneurock"
          title="Connect with me on LinkedIn"
        >
          <FontAwesomeIcon icon={linkedInIcon} />
        </a>
      </li>
      <li className="site-footer__social-menu-item">
        <a
          href="https://mas.to/@neurock"
          title="Follow me on Mastodon"
        >
          <FontAwesomeIcon icon={mastodonIcon} />
        </a>
      </li>
      <li className="site-footer__social-menu-item">
        <a
          href="https://github.com/jneurock"
          title="Find me on GitHub"
        >
          <FontAwesomeIcon icon={gitHubIcon} />
        </a>
      </li>
    </ul>
  );
}
