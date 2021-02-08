import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn as linkedInIcon,
  faGithub as gitHubIcon,
  faTwitter as twitterIcon
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
          href="https://github.com/jneurock"
          title="Find me on GitHub"
        >
          <FontAwesomeIcon icon={gitHubIcon} />
        </a>
      </li>
      <li className="site-footer__social-menu-item">
        <a
          href="https://twitter.com/rockyneurock"
          title="Follow me on Twitter"
        >
          <FontAwesomeIcon icon={twitterIcon} />
        </a>
      </li>
    </ul>
  );
}
