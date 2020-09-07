import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book: { id, title, author } }) => {
  const { dispatch, selectedBook, setSelectedBook } = useContext(BookContext);
  const initSelectedBook = () => {
    setSelectedBook({ id, title, author });
  };
  return (
    <li>
      <div
        className='title'
        onClick={() => dispatch({ type: 'REMOVE_BOOK', id })}
      >
        {title}
      </div>

      <div className='author'>{author}</div>
      <div className='update' onClick={initSelectedBook}>
        update
      </div>
    </li>
  );
};

export default BookDetails;
