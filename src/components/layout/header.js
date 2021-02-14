import NavMenu from './nav-menu';
import React from 'react';
import Title from './title';
import ToggleColorMode from '../toggle-color-mode';

export default function Header() {
  return (
    <header className="site-header">
      <section className="content">
        <div className="flex flex--space-between flex--wrap">
          <div>
            <Title />
            <NavMenu />
          </div>
          <ToggleColorMode />
        </div>
        <hr />
      </section>
    </header>
  );
}
