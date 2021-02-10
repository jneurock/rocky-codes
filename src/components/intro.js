import React from 'react';

export default function Intro() {
  return (
    <section className="intro">
      <h2 className="intro__heading">
        Hi.
      </h2>
      <p>
        <img
          className="intro__photo"
          alt="Rocky Neurock"
          src="/images/rocky.jpg"
        />
        My name is Rocky. I built this site so I could share thoughts about
        software engineering and leadership, write about my own personal approach
        and share my projects. <span className="hide-sm">I love to meet new people
        so feel free to connect with me!</span>
      </p>
    </section>
  );
}
