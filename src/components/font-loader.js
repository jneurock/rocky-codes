import { Helmet } from 'react-helmet';
import React from 'react';

export default function FontLoader() {
  return (
    <Helmet>
      <link 
        rel="preload"
        href="/fonts/Montserrat/Montserrat-ExtraBold.ttf"
        as="font"
        crossorigin
      />
      <link 
        rel="preload"
        href="/fonts/Nunito/Nunito-Regular.ttf"
        as="font"
        crossorigin
      />
      <link 
        rel="preload"
        href="/fonts/Nunito/Nunito-Italic.ttf"
        as="font"
        crossorigin
      />
      <link 
        rel="preload"
        href="/fonts/Nunito/Nunito-Bold.ttf"
        as="font"
        crossorigin
      />
      <link 
        rel="preload"
        href="/fonts/Nunito/Nunito-BoldItalic.ttf"
        as="font"
        crossorigin
      />
    </Helmet>
  );
}
