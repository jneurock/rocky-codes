import React from 'react';
import ToggleIcons from '../icons';
import renderer from 'react-test-renderer';
import { afterEach, describe, expect, it } from '@jest/globals';
import { cleanup, fireEvent, render } from '@testing-library/react';

const MOCK_ICONS = [
  { component: 'div', icon: 'foo', title: 'foo' },
  { component: 'div', icon: 'bar', title: 'bar' },
];

describe('component | toggle | icons', function() {
  afterEach(function() {
    cleanup();
  });

  it('renders with selected position', function() {
    const tree = renderer
      .create(<ToggleIcons icons={MOCK_ICONS} selectedPosition={0} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('sends the selected position on click', function() {
    const handler = (_, i) => expect(i).toBe(0);

    const { container, getByTitle } = render(
      <ToggleIcons clickHandler={handler} icons={MOCK_ICONS} />
    );

    fireEvent.click(getByTitle('foo'));

    expect(container).toMatchSnapshot();
  });

  it('sends the selected position on key event', function() {
    const handler = (_, i) => expect(i).toBe(1);

    const { container, getByTitle } = render(
      <ToggleIcons keyHandler={handler} icons={MOCK_ICONS} />
    );

    fireEvent.keyDown(getByTitle('bar'), { key: 'Enter' });

    expect(container).toMatchSnapshot();
  });
});
