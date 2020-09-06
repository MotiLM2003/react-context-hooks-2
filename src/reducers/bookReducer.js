const { v4: uuidv4 } = require('uuid');
export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK': {
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: uuidv4() },
      ];
      break;
    }

    case 'REMOVE_BOOK': {
      return state.filter((book) => book.id !== action.id);
      break;
    }

    case 'UPDATE_book': {
      return state;
    }

    default: {
      return state;
    }
  }
};
