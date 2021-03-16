import {useHistory} from 'react-router-dom';

const About = () => {
  const history = useHistory();

  return (
    <div>
      <h2>About Us</h2>
      <p>We are a dedicated team of full-time librarians who have compiled the world's largest collection of books.</p>
      <p>Peruse the collection <button onClick={() => history.push('/books')}>here</button></p>
    </div>
  );
};

export default About;
