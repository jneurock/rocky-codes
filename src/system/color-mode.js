import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop as systemIcon,
  faCloudMoon as darkIcon,
  faSun as lightIcon
} from '@fortawesome/free-solid-svg-icons';
import storage from './storage';

const STORAGE_KEY = 'color-mode';

export const COLOR_MODES = ['system', 'light', 'dark'];
export const COLOR_MODE_ICONS = [
  { component: FontAwesomeIcon, icon: systemIcon, title: 'System' },
  { component: FontAwesomeIcon, icon: lightIcon, title: 'Light' },
  { component: FontAwesomeIcon, icon: darkIcon, title: 'Dark' }
];

function setMode(mode) {
  const html = document.querySelector('html');
  const hasSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  const isDarkMode = mode === 'dark' || (mode !== 'light' && hasSystemDarkMode);

  if (isDarkMode) {
    html.setAttribute('data-color-mode', 'dark');
  } else {
    html.removeAttribute('data-color-mode');
  }
}

export const getColorMode = () => storage.get(STORAGE_KEY);

export function setColorMode(mode) {
  if (!COLOR_MODES.includes(mode)) {
    throw new Error(`Invalid color mode: ${mode}`);
  }

  setMode(mode);

  storage.set(STORAGE_KEY, mode);
}
