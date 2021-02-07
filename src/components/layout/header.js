import { Link } from 'gatsby';
import NavMenu from './nav-menu';
import React from 'react';

/**
  TODO:
    - Add a color mode selector
      - A four step toggle selector might look nice
      - Color modes:
        - System (default)
        - Light
        - Dark
        - Laser
 */
export default function Header() {
  return (
    <header className="site-header">
      <section className="content">
        <Link className="site-header__link" to="/">
          <h1 className="site-header__name">
            rocky<span class="color-fg">.codes</span>
          </h1>
        </Link>
        <p className="subtitle">
          Trying to share thoughts that offer something new.
        </p>
        <NavMenu />
        <hr />
      </section>
    </header>
  );
}
