import React from 'react';
import { render } from '@testing-library/react';
import Game from '../Game';

describe('tests for the Game component', () => {

  test('can toggle the cheating boolean by clicking on robot icon', () => {
    const something = render(<Game />);
    console.log(something);
  });

});
