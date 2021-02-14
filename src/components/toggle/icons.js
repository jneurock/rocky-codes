import React from 'react';

export default function ToggleIcons({
  clickHandler,
  icons,
  keyHandler,
  selectedPosition
}) {
  if (!icons?.length) {
    return (<></>);
  }

  return (
    <div className="toggle-icons flex flex--space-between">
      {
        icons.map(({ component, icon, title }, i) => React.createElement(
          component,
          {
            className: `toggle-icon ${selectedPosition === i ? 'toggle-icon--active' : ''}`,
            icon,
            key: `icon-${i}`,
            onClick: e => clickHandler(e, i),
            onKeyDown: e => keyHandler(e, i),
            title
          }
        ))
      }
    </div>
  );
}
