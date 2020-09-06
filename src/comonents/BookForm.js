import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { addBook } = useContext(BookContext);

  const onFormSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor=''>Title</label>
      <input
        type='text'
        value={title}
        placeholder='Add title'
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor=''>Author</label>
      <input
        type='text'
        placeholder='add author'
        title={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type='submit' value='Add new book' />
    </form>
  );
};

export default BookForm;
