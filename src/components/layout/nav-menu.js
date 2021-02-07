import { Link } from 'gatsby';
import React from 'react';

const ACTIVE_CLASS = 'active';

const NavLink = ({ children, partiallyActive = true, to }) => (
  <Link
    activeClassName={ACTIVE_CLASS}
    className="site-nav__link"
    partiallyActive={partiallyActive}
    to={to}
  >
    {children}
  </Link>
);

export default function NavMenu() {
  return (
    <nav class="site-nav">
      <ul className="flex">
        <li>
          <NavLink partiallyActive={false} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/thoughts">
            Thoughts
          </NavLink>
        </li>
        <li>
          <NavLink to="/approach">
            My Approach
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
