import React from 'react';
import ThoughtMeta from './meta';
import { Link } from 'gatsby';

export default function ThoughtPreview({ content }) {
  return (
    <article className="thought-preview" key={content.id}>
      <header>
        <ThoughtMeta
          date={content.frontmatter.date}
          readTime={content.fields.readingTime.text}
        />
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
