import { combineReducers } from 'redux';
//
import BooksReducer from './BooksReducer';

// maps state and reducer
const rootReducer = combineReducers({
  books: BooksReducer  
});

export default rootReducer;