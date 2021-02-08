import Header from './header';
import React from 'react';
import { Link } from 'gatsby';

export default function ThoughtPreview({ content }) {
  return (
    <article class="thought-preview" key={content.id}>
      <Header content={content} />
      <section>
        <p>
          {content.excerpt}
        </p>
        <Link
          className="thought-link"
          title={`Read ${content.frontmatter.title}`}
          to={content.frontmatter.path}
        >
          Read More
        </Link>
      </section>
    </article>
  );
}
