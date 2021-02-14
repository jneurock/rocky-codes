import React from 'react';
import { Link } from 'gatsby';

export default function Title() {
  return (
    <>
      <Link
        className="site-title__link"
        title="rocky.codes | Home"
        to="/"
      >
        <h1 id="top" className="site-title__name">
          rocky<span className="color-fg">.codes</span>
        </h1>
      </Link>
      <p className="subtitle margin-btm-0">
        Trying to share thoughts that offer something new.
      </p>
    </>
  );
}
