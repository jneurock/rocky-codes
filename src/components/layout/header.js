import NavMenu from './nav-menu';
import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <header className="site-header">
      <section className="content">
        <Link className="site-header__link" title="rocky.codes | Home" to="/">
          <h1 className="site-header__name">
            rocky<span className="color-fg">.codes</span>
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
