import React from 'react';

const SOURCES = [
  { hasMaxWidth: true, pixelRatio: 4, size: '4x-m' },
  { hasMaxWidth: false, pixelRatio: 4, size: '4x' },
  { hasMaxWidth: true, pixelRatio: 3, size: '3x-m' },
  { hasMaxWidth: false, pixelRatio: 3, size: '3x' },
  { hasMaxWidth: true, pixelRatio: 2, size: '2x-m' },
  { hasMaxWidth: false, pixelRatio: 2, size: '2x' },
  { hasMaxWidth: true, pixelRatio: null, size: '1x-m' }
];

function createMedia({ hasMaxWidth, lgBreakpoint, pixelRatio }) {
  const queries = [];

  if (hasMaxWidth) {
    queries.push(`(max-width: ${lgBreakpoint})`);
  }

  if (pixelRatio) {
    queries.push(`(-webkit-min-device-pixel-ratio: ${pixelRatio})`);
  }

  return queries.join(' and ');
}

export default function Picture({
  alt,
  src, 
  height,
  imgClass,
  lgBreakpoint,
  width
}) {
  return (
    <picture>
      {
        SOURCES.map(function({ hasMaxWidth, pixelRatio, size }) {
          return (
            <source
              key={size}
              media={createMedia({ hasMaxWidth, lgBreakpoint, pixelRatio })}
              srcSet={src.replace('1x', size)}
            />
          );
        })
      }
      <img
        alt={alt}
        className={imgClass}
        height={height}
        src={src}
        width={width}
      />
    </picture>
  );
}
