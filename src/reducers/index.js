import { combineReducers } from 'redux';
//
import BooksReducer from './BooksReducer';
import ActiveBookReducer from './ActiveBookReducer';


// maps state and reducer
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
});

export default rootReducer; 