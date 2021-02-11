import React from 'react';

export default function ThoughtMeta({ date, readTime }) {
  return (
    <div className="thought-meta">
      <small>
        {date} &ndash; {readTime}
      </small>
    </div>
  );
}
