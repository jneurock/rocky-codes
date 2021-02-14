import React from 'react';
import ToggleIcons from './icons';

function getValuePosition(values, value) {
  const position = values.indexOf(value);

  return position !== -1 ? position : 0;
}

export default function Toggle({
  id,
  label,
  onChange,
  selectedValue,
  valueIcons,
  values
}) {
  const [position, setPosition] = React.useState(0);

  React.useEffect(
    () => setPosition(getValuePosition(values, selectedValue)),
    [selectedValue]
  );

  function updatePosition(_e, i) {
    const nextPosition = i != null
      ? i
      : position < values.length - 1
        ? position + 1
        : 0;

    onChange(values[nextPosition]);
  }

  function handleKey(e, i) {
    e.preventDefault();

    if (e.keyCode === 13 || e.keyCode === 32) {
      updatePosition(i);
    }
  }

  return (
    <div className="toggle">
      <section className="toggle__control">
        <div className="toggle__bar" />
        <label className="screen-reader-only" htmlFor={id}>
          {label}
        </label>
        <button
          aria-label="Toggle Color Mode"
          className="toggle__switch"
          data-testid="toggle-button"
          data-toggle-position={position}
          id={id}
          onClick={updatePosition}
          onKeyDown={handleKey}
        />
      </section>
      <ToggleIcons
        clickHandler={updatePosition}
        icons={valueIcons}
        keyHandler={handleKey}
        selectedPosition={position}
      />
    </div>
  );
}
