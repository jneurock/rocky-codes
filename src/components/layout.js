// TODO: Add site meta

import FontLoader from './font-loader';
import Footer from './layout/footer';
import Header from './layout/header';
import React from 'react';

import '../styles/main.scss';

export default function Layout({ children }) {
  return (
    <div className="container flex flex-direction-column">
      <FontLoader />
      <div class="container__content-wrapper flex-grow-1">
        <Header className="content" />
        <main className="content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
