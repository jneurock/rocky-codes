import React from 'react';
import Toggle from '../index';
import renderer from 'react-test-renderer';
import { afterEach, describe, expect, it, jest } from '@jest/globals';
import { cleanup, fireEvent, render } from '@testing-library/react';

const MOCK_ON_CHANGE = jest.fn();
const MOCK_VALUES = ['one', 'two'];

describe('component | toggle', function() {
  afterEach(function() {
    cleanup();
  });

  it('renders', function() {
    const tree = renderer
      .create(<Toggle values={MOCK_VALUES} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('sends the value of next position on click', function() {
    const { container, getByTestId } = render(
      <Toggle onChange={MOCK_ON_CHANGE} values={MOCK_VALUES} />
    );

    fireEvent.click(getByTestId('toggle-button'));

    expect(container).toMatchSnapshot();
    expect(MOCK_ON_CHANGE).toHaveBeenCalledWith(MOCK_VALUES[1]);
  });

  it('sends the value of first position after clicking last', function() {
    const { container, getByTestId } = render(
      <Toggle onChange={MOCK_ON_CHANGE} values={MOCK_VALUES} />
    );

    fireEvent.click(getByTestId('toggle-button'));
    fireEvent.click(getByTestId('toggle-button'));

    expect(container).toMatchSnapshot();
    expect(MOCK_ON_CHANGE).toHaveBeenCalledWith(MOCK_VALUES[0]);
  });

  it('sends the value of next position on enter', function() {
    const { container, getByTestId } = render(
      <Toggle onChange={MOCK_ON_CHANGE} values={MOCK_VALUES} />
    );

    fireEvent.keyDown(getByTestId('toggle-button'), { key: 'Enter' });

    expect(container).toMatchSnapshot();
    expect(MOCK_ON_CHANGE).toHaveBeenCalledWith(MOCK_VALUES[1]);
  });

  it('sends the value of next position on space', function() {
    const { container, getByTestId } = render(
      <Toggle onChange={MOCK_ON_CHANGE} values={MOCK_VALUES} />
    );

    fireEvent.keyDown(getByTestId('toggle-button'), { key: 'Space' });

    expect(container).toMatchSnapshot();
    expect(MOCK_ON_CHANGE).toHaveBeenCalledWith(MOCK_VALUES[1]);
  });
});
