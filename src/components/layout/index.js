import FontLoader from '../font-loader';
import Footer from './footer';
import Header from './header';
import React from 'react';

import '../../styles/main.scss';

export default function Layout({ children }) {
  return (
    <div class="container flex flex--direction-column">
      <FontLoader />
      <div class="container__content-wrapper flex--grow-1">
        <Header className="content" />
        <main class="content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
