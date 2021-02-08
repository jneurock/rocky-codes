import React from 'react';

export default function Card({ description, imageSrc, title, type, url }) {
  return (
    <div class="card">
      <a
        href={url}
        rel="noreferrer"
        target="_blank"
        title={`Check out ${title}`}
      >
        <header class="card__header">
          <img class="card__image" alt={title} src={imageSrc} />
        </header>
        <section class="card__body">
          <p class="card__title">
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
