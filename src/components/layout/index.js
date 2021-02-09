import Footer from './footer';
import Head from '../head';
import Header from './header';
import React from 'react';

import '../../styles/main.scss';

export default function Layout({ children, meta }) {
  return (
    <div className="container flex flex--direction-column">
      <Head meta={meta} />
      <div className="container__content-wrapper flex--grow-1">
        <Header className="content" />
        <main className="content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
