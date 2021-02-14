import React from 'react';

export default function ContentMeta({ date, readTime }) {
  const meta = [readTime];

  if (date) {
    meta.unshift(date);
  }

  return (
    <div className="content-meta">
      <small dangerouslySetInnerHTML={{ __html: meta.join(' &ndash; ') }} />
    </div>
  );
}
