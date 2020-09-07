import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { dispatch, selectedBook, setSelectedBook } = useContext(BookContext);
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: selectedBook.id == 0 ? 'ADD_BOOK' : 'UPDATE_BOOK',
      book: selectedBook,
    });

    setSelectedBook({ id: 0, title: '', author: '' });
  };

  const onBookChange = (e) => {
    setSelectedBook({ ...selectedBook, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor=''>Title</label>
      <input
        type='text'
        name='title'
        value={selectedBook.title}
        placeholder='Add title'
        onChange={onBookChange}
        required
      />
      <label htmlFor=''>Author</label>
      <input
        type='text'
        name='author'
        placeholder='add author'
        value={selectedBook.author}
        onChange={onBookChange}
        required
      />
      <input
        type='submit'
        value={selectedBook.id === 0 ? 'Add book' : 'Update book'}
      />
    </form>
  );
};

export default BookForm;
