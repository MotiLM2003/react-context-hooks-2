import React from 'react';
import BookContextProvider from './contexts/BookContext';
import NavBar from './comonents/Navbar';
import BookList from './comonents/BookList';
import BookForm from './comonents/BookForm';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
