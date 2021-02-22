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
