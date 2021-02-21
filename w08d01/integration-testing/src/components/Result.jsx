import React from 'react';
import axios from 'axios';

const dataUrl = 'https://my-json-server.typicode.com/andydlindsay/moai-axe-tree/high-scores';

const Result = () => {
  const [highScores, setHighScores] = React.useState([]);

  const fetchHighScores = () => {
    axios
      .get(dataUrl)
      .then(data => setHighScores(data.data))
      .catch(err => console.error(err));
  };

  return(
    <footer data-testid="result_footer">
      <h2>Waiting for your choice!</h2>
      <button onClick={fetchHighScores} data-testid="high-scores">High Scores!</button>
      { highScores.map((highScore, index) => <p key={highScore.id}>{index + 1}. {highScore.name}: {highScore.points}</p>) }
    </footer>
  );
}

export default Result;
