const { v4: uuidv4 } = require('uuid');
export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK': {
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: uuidv4() },
      ];
    }

    case 'REMOVE_BOOK': {
      return state.filter((book) => book.id !== action.id);
    }

    case 'UPDATE_BOOK': {
      const updateBooks = [...state];
      const index = updateBooks.findIndex((book) => book.id === action.book.id);
      updateBooks.splice(index, 1, action.book);

      console.log(action.book);
      return updateBooks;
    }

    default: {
      return state;
    }
  }
};
