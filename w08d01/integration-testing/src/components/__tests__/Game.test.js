import React from 'react';
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import Game from '../Game';

describe('tests for the Game component', () => {

  test('can toggle the cheating boolean by clicking on robot icon', () => {
    const { container, getByTestId, debug } = render(<Game />);

    // console.log(prettyDOM(container));
    // debug();

    // getByTestId(container, 'robot-icon');
    const robotIcon = getByTestId('robot-icon');

    fireEvent.click(robotIcon);
    expect(robotIcon).toHaveClass('cheating');

    fireEvent.click(robotIcon);
    expect(robotIcon).not.toHaveClass('cheating');
  });

});
