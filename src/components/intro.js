import Picture from './picture';
import React from 'react';

export default function Intro() {
  return (
    <section className="intro">
      <h2 className="intro__heading">
        Hi.
      </h2>
      <p>
        <Picture
          alt="Rocky Neurock"
          height="10rem"
          imgClass="intro__photo"
          lgBreakpoint="1000px"
          src="/images/rocky-1x.jpg"
          width="10rem"
        />
        My name is Rocky. I built this site so I could share thoughts about
        software engineering and leadership, write about my own personal approach
        and share my projects. <span className="hide-sm">I love to meet new people
        so feel free to connect with me!</span>
      </p>
    </section>
  );
}
