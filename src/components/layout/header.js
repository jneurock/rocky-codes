import NavMenu from './nav-menu';
import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <header class="site-header">
      <section class="content">
        <Link className="site-header__link" title="rocky.codes | Home" to="/">
          <h1 class="site-header__name">
            rocky<span class="color-fg">.codes</span>
          </h1>
        </Link>
        <p class="subtitle">
          Trying to share thoughts that offer something new.
        </p>
        <NavMenu />
        <hr />
      </section>
    </header>
  );
}
