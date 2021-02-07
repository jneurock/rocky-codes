import Header from './header';
import { Link } from 'gatsby';
import React from 'react';

export default function ThoughtPreview({ content }) {
  return (
    <article className="thought-preview" key={content.id}>
      <Header content={content} />
      <section>
        <p>
          {content.excerpt}
        </p>
        <Link
          className="thought-link"
          to={content.frontmatter.path}
        >
          Read More
        </Link>
      </section>
    </article>
  );
}
