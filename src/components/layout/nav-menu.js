import { Link } from 'gatsby';
import React from 'react';

const ACTIVE_CLASS = 'active';

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
      <ul className="flex flex--wrap">
        <li>
          <NavLink partiallyActive={false} title="rocky.codes | Home" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink title="rocky.codes | Thoughts" to="/thoughts">
            Thoughts
          </NavLink>
        </li>
        <li>
          <NavLink title="rocky.codes | My Approach" to="/approach">
            My Approach
          </NavLink>
        </li>
        <li>
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
