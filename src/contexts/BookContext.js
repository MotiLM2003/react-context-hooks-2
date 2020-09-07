import React, { createContext, useReducer, useState } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, [
    { title: 'test', author: 'moti', id: 1 },
  ]);

  const [selectedBook, setSelectedBook] = useState({
    id: 0,
    title: '',
    author: '',
  });
  return (
    <BookContext.Provider
      value={{ books, dispatch, selectedBook, setSelectedBook }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
