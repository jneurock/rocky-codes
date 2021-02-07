import { Link } from 'gatsby';
import React from 'react';

export default function ThoughtHeader({ content }) {
  return (
    <header>
      <div className="thought-date">
        <small>
          {content.frontmatter.date}
        </small>
      </div>
      <Link
        className="thought-link thought-link--heading"
        to={content.frontmatter.path}
      >
        <h3 className="thought-title">
          {content.frontmatter.title}
        </h3>
      </Link>
    </header>
  );
}