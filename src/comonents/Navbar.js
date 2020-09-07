import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>My Book List</h1>
      <p>Currently has {books.length}</p>
    </div>
  );
};

export default NavBar;
