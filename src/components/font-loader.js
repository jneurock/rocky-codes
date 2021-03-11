import { Helmet } from 'react-helmet';
import React from 'react';

export default function FontLoader() {
  return (
    <Helmet>
      <link 
        rel="preload"
        href="/fonts/Montserrat/Montserrat-Bold.ttf"
        as="font"
        crossOrigin
      />
      <link 
        rel="preload"
        href="/fonts/Montserrat/Montserrat-ExtraBold.ttf"
        as="font"
        crossOrigin
      />
      <link 
        rel="preload"
        href="/fonts/Nunito/Nunito-Regular.ttf"
        as="font"
        crossOrigin
      />
      <link 
        rel="preload"
        href="/fonts/Nunito/Nunito-Italic.ttf"
        as="font"
        crossOrigin
      />
      <link 
        rel="preload"
        href="/fonts/Nunito/Nunito-Bold.ttf"
        as="font"
        crossOrigin
      />
      <link 
        rel="preload"
        href="/fonts/Nunito/Nunito-BoldItalic.ttf"
        as="font"
        crossOrigin
      />
      <link 
        rel="preload"
        href="/fonts/RobotoSlab/RobotoSlab-Light.ttf"
        as="font"
        crossOrigin
      />
    </Helmet>
  );
}
