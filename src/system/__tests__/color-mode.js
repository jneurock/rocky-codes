import browser from '../browser';
import dom from '../dom';
import storage from '../storage';
import { describe, expect, it, jest } from '@jest/globals';
import { setColorMode } from '../color-mode';

jest.mock('../browser');
jest.mock('../dom');
jest.mock('../storage');

const mockMediaMatchDarkMode = matches =>
  browser.matchMedia = jest.fn(() => ({ matches }));

describe('unit | system | color-mode', function() {
  it('sets dark mode if `system` preference is dark', function() {
    const setAttribute = jest.fn();
    
    dom.find = jest.fn(() => ({ setAttribute }));

    mockMediaMatchDarkMode(true);

    setColorMode('system');

    expect(setAttribute).toHaveBeenCalledWith('data-color-mode', 'dark');
    expect(storage.set).toHaveBeenCalledWith('color-mode', 'system');
  });

  it('sets dark mode if `dark` preference', function() {
    const setAttribute = jest.fn();

    dom.find = jest.fn().mockImplementationOnce(() => ({ setAttribute }));

    setColorMode('dark');

    expect(setAttribute).toHaveBeenCalledWith('data-color-mode', 'dark');
    expect(storage.set).toHaveBeenCalledWith('color-mode', 'dark');
  });

  it('removes dark mode if `system` preference is not dark', function() {
    const removeAttribute = jest.fn();

    dom.find = jest.fn(() => ({ removeAttribute }));

    mockMediaMatchDarkMode(false);

    setColorMode('system');

    expect(removeAttribute).toHaveBeenCalledWith('data-color-mode');
    expect(storage.set).toHaveBeenCalledWith('color-mode', 'system');
  });

  it('removes dark mode if `light` preference', function() {
    const removeAttribute = jest.fn();

    dom.find = jest.fn(() => ({ removeAttribute }));

    setColorMode('light');

    expect(removeAttribute).toHaveBeenCalledWith('data-color-mode');
    expect(storage.set).toHaveBeenCalledWith('color-mode', 'light');
  });
});
