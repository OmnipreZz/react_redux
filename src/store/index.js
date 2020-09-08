import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todosReducer } from './todosReducer';
import { filterReducer } from './filterReducer';
import thunk from 'redux-thunk';


export default createStore(
  combineReducers({
    todos: todosReducer,
    filter: filterReducer
  }),
  composeWithDevTools(
    applyMiddleware(thunk),
    
  )
)

