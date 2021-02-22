import { announceResult, chooseRobotItem } from '../helpers';

describe('announceResult function', () => {
  let fakeState;

  // before()

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('chooseRobotItem function', () => {

  test('returns the winning item if cheating is "true"', () => {
    const playerSelection = 'Axe';
    const cheating = true;
    const expected = 'Moai';

    const actual = chooseRobotItem(playerSelection, cheating);
    expect(actual).toBe(expected);
  });

  test('returns a random item if cheating is "false"', () => {
    const playerSelection = 'Axe';
    const cheating = false;

    const options = ['Moai', 'Axe', 'Tree'];
    const actual = chooseRobotItem(playerSelection, cheating);

    // expect(options.includes(actual)).toBe(true);
    expect(options).toContain(actual);
  });

});
