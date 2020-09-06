import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book: { id, title, author } }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li>
      <div
        className='title'
        onClick={() => dispatch({ type: 'REMOVE_BOOK', id })}
      >
        {title}
      </div>

      <div className='author'>{author}</div>
      <div className='update'>update</div>
    </li>
  );
};

export default BookDetails;
