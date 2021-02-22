export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
};

export const genFeedbackMessage = (status) => {
  switch (status) {
    case 'Won':
      return 'You win! Good job!';
    case 'Lost':
      return 'Too bad. Better luck next time.';
    case 'Tied':
      return 'Tie game!';
    default:
      return 'Waiting for your choice!';
  }
};

export const chooseRobotItem = (playerSelection, cheating) => {
  if (cheating) {
    const outcomes = {
      Axe: 'Moai',
      Tree: 'Axe',
      Moai: 'Tree'
    };

    return outcomes[playerSelection];
  }

  const options = ['Moai', 'Axe', 'Tree'];
  // const options = Object.keys(outcomes);
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};
