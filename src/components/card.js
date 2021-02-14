import React from 'react';

export default function Card({ description, imageSrc, title, type, url }) {
  return (
    <div className="card">
      <a
        href={url}
        rel="noreferrer"
        target="_blank"
        title={`Check out ${title}`}
      >
        <header className="card__header">
          <img className="card__image" alt={title} src={imageSrc} />
        </header>
        <section className="card__body">
          <p>
            <strong>
              {title}
            </strong>
          </p>
          <p>
            {type}
          </p>
          <p>
            {description}
          </p>
        </section>
      </a>
    </div>
  );
}
