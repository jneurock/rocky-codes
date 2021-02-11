import React from 'react';
import ToggleIcons from './icons';

function getValuePosition(values, value) {
  const position = values.indexOf(value);

  return position === -1 ? 0 : position;
}

export default function Toggle({ id, onChange, value, valueIcons, values }) {
  const currentPosition = getValuePosition(values, value);
  const [position, setPosition] = React.useState(currentPosition);

  function advancePosition(_e, i) {
    const nextPosition = i != null
      ? i
      : position < values.length - 1
        ? position + 1
        : 0;

    setPosition(nextPosition);

    onChange(values[nextPosition]);
  }

  function handleKey(e, i) {
    e.preventDefault();

    if (e.keyCode === 13 || e.keyCode === 32) {
      advancePosition(i);
    }
  }

  return (
    <div className="toggle">
      <section className="toggle__control">
        <div className="toggle__bar" />
        <label className="screen-reader-only" htmlFor={id}>
          Color Mode:
        </label>
        <button
          aria-label="Toggle Color Mode"
          className="toggle__switch"
          data-testid="toggle-button"
          data-toggle-position={position}
          id={id}
          onClick={advancePosition}
          onKeyDown={handleKey}
        />
      </section>
      <ToggleIcons
        clickHandler={advancePosition}
        icons={valueIcons}
        keyHandler={handleKey}
        selectedPosition={position}
      />
    </div>
  );
}
