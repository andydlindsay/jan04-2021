// import { useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom';

const Book = () => {
  const {bookId} = useParams(); // req.params.shortURL
  const history = useHistory();
  console.log(history);

  // useEffect(() => {
  //   axios.get(`/api/books/${bookId}`)
  //     .then(book => {
  //       setBook(book.data);
  //     })
  // }, [bookId]);

  const handleClick = () => {
    history.push('/about');
  };

  return (
    <div>
      <h2>Book #{bookId}</h2>

      <button onClick={handleClick}>Go to the about page</button>
    </div>
  );
};

export default Book;
