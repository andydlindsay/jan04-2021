import React from 'react';
import axios from 'axios';
import { genFeedbackMessage } from '../helpers/helpers';

const dataUrl = 'https://my-json-server.typicode.com/andydlindsay/moai-axe-tree/high-scores';

const Result = (props) => {
  const [highScores, setHighScores] = React.useState([]);
  const message = genFeedbackMessage(props.status);

  const fetchHighScores = () => {
    axios
      .get(dataUrl)
      .then(data => setHighScores(data.data))
      .catch(err => console.error(err));
  };

  return(
    <footer data-testid="result_footer">
      <h2>{message}</h2>
      <button onClick={fetchHighScores} data-testid="high-scores">High Scores!</button>
      { highScores.map((highScore, index) => <p key={highScore.id}>{index + 1}. {highScore.name}: {highScore.points}</p>) }
    </footer>
  );
}

export default Result;
