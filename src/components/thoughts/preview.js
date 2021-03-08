import React from 'react';
import ContentMeta from '../content-meta';
import { Link } from 'gatsby';

export default function ThoughtPreview({ content }) {
  return (
    <article className="thought-preview" key={content.id}>
      <header>
        <ContentMeta
          date={content.frontmatter.date}
          readTime={content.fields.readingTime.text}
        />
        <Link
          className="thought-preview__link"
          title={`Read ${content.frontmatter.title}`}
          to={content.frontmatter.path}
        >
          <h3 className="margin-btm-0">
            {content.frontmatter.title}
          </h3>
        </Link>
      </header>
      <section>
        <p>
          {content.frontmatter.excerpt || content.excerpt}
        </p>
      </section>
    </article>
  );
}
