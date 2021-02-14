import { Link } from 'gatsby';
import React from 'react';

const ACTIVE_CLASS = 'site-nav__link--active';

const NavLink = ({ children, partiallyActive = true, title, to }) => (
  <Link
    activeClassName={ACTIVE_CLASS}
    className="site-nav__link"
    partiallyActive={partiallyActive}
    title={title}
    to={to}
  >
    {children}
  </Link>
);

export default function NavMenu() {
  return (
    <nav className="site-nav">
      <ul className="site-nav__menu">
        <li className="site-nav__item">
          <NavLink partiallyActive={false} title="rocky.codes | Home" to="/">
            Home
          </NavLink>
        </li>
        <li className="site-nav__item">
          <NavLink title="rocky.codes | Thoughts" to="/thoughts">
            Thoughts
          </NavLink>
        </li>
        <li className="site-nav__item">
          <NavLink title="rocky.codes | My Approach" to="/approach">
            My Approach
          </NavLink>
        </li>
        <li className="site-nav__item">
          <a
            className="site-nav__link"
            href="https://resume.rocky.codes"
            rel="noreferrer"
            target="_blank"
            title="Take a look at my resume"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
