import {
  COLOR_MODE_ICONS,
  COLOR_MODES,
  getColorMode,
  setColorMode
} from '../system/color-mode';
import React from 'react';
import Toggle from './toggle';

export default function ToggleColorMode() {
  const [selectedValue, setSelectedValue] = React.useState();

  function updateColorMode(colorMode) {
    setColorMode(colorMode);
    setSelectedValue(colorMode);
  }

  React.useEffect(function() {
    const [defaultColorMode] = COLOR_MODES;
    const colorMode = getColorMode() || defaultColorMode;

    updateColorMode(colorMode);
  });

  return (
    <Toggle
      id="toggle-color-mode"
      label="Color Mode:"
      onChange={updateColorMode}
      selectedValue={selectedValue}
      valueIcons={COLOR_MODE_ICONS}
      values={COLOR_MODES}
    />
  );
}
