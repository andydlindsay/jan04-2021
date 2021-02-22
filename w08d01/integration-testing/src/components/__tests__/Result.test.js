import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';
// import library to be mocked
import axios from 'axios';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('mocking functions', () => {
  // create a mock function
  // action('something');
  const myFunc = jest.fn(); // () => {}
  const returnVal = myFunc(7);

  // expect(returnVal).toBe(undefined);
  expect(returnVal).toBeUndefined();
  expect(myFunc).toHaveBeenCalled();
  expect(myFunc).toHaveBeenCalledTimes(1);
  expect(myFunc).toHaveBeenCalledWith(7);
});

// tell jest to mock the library
jest.mock('axios');

// setup some fake data (fixture)
const data = [
  {
    id: 1,
    name: 'Alice',
    points: 15
  },
  {
    id: 2,
    name: 'Bob',
    points: 10
  },
  {
    id: 3,
    name: 'Carol',
    points: 5
  },
];

test('mocking Axios', () => {
  // tell jest what to return
  axios.get.mockResolvedValueOnce({ data });

  const { findByText, getByTestId } = render(<Result status="Waiting" />);

  const fetchHighScoreButton = getByTestId('high-scores');
  fireEvent.click(fetchHighScoreButton);

  return findByText('Carol', { exact: false });
});






//
