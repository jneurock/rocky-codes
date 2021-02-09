import {
  COLOR_MODE_ICONS,
  COLOR_MODES,
  getColorMode,
  setColorMode
} from '../system/color-mode';
import React from 'react';
import Toggle from './toggle';

export default function ToggleColorMode() {
  const [defaultColorMode] = COLOR_MODES;

  React.useEffect(() => setColorMode(getColorMode() || defaultColorMode));

  return (
    <Toggle
      label="Color Mode:"
      onChange={setColorMode}
      value={getColorMode()}
      valueIcons={COLOR_MODE_ICONS}
      values={COLOR_MODES}
    />
  );
}
