import React from 'react';
import ToggleIcons from './icons';

function getValuePosition(values, value) {
  const position = values.indexOf(value);

  return position === -1 ? 0 : position;
}

export default function Toggle({ onChange, value, valueIcons, values }) {
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
    <div className="toggle" aria-hidden>
      <section className="toggle__control">
        <div className="toggle__bar" />
        <button // eslint-disable-line jsx-a11y/control-has-associated-label
          className="toggle__switch"
          data-toggle-position={position}
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
