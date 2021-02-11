import React from 'react';
import { Link } from 'gatsby';

export default function ThoughtPreview({ content }) {
  return (
    <article className="thought-preview" key={content.id}>
      <header>
        <div className="thought-date">
          <small>
            {content.frontmatter.date}
          </small>
        </div>
        <Link
          className="thought-preview__link"
          title={`Read ${content.frontmatter.title}`}
          to={content.frontmatter.path}
        >
          <h3>
            {content.frontmatter.title}
          </h3>
        </Link>
      </header>
      <section>
        <p>
          {content.excerpt}
        </p>
      </section>
    </article>
  );
}
