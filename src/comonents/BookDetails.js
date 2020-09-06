import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book: { id, title, author } }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li>
      <div className='title' onClick={() => removeBook(id)}>
        {title}
      </div>
      <div className='author'>{author}</div>
    </li>
  );
};

export default BookDetails;
