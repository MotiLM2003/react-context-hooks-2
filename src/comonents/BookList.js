import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);

  const renderedBooks =
    books.length === 0 ? (
      <div className='empty'>No books found</div>
    ) : (
      <div className='book-list'>
        <ul>
          {books.map((book) => {
            return <BookDetails key={book.id} book={book} />;
          })}
        </ul>
      </div>
    );

  return <div>{renderedBooks}</div>;
};

export default BookList;
