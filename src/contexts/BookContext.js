import React, { createContext, useState } from 'react';
const { v4: uuidv4 } = require('uuid');
export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'name of the wind',
      author: 'brandon sanderson',
    },
    {
      id: 2,
      title: 'the final empire',
      author: 'patrick rothfuss',
    },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
