import React from 'react';
import ThoughtPreview from './preview';

export default function LatestThoughts({ thoughts }) {
  return (
    <section>
      <header>
        <h5>
          Latest <span className="color-secondary">Thoughts</span>
        </h5>
        <hr />
      </header>
      {
        thoughts.map(function({ node: thought })  {
          return (
            <ThoughtPreview content={thought} key={thought.id} />
          );
        })
      }
    </section>
  );
}
