import thunk from 'redux-thunk' //middleware
import {createStore , combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {todosReducers } from './reducers/todosReducer';

const reducer = combineReducers({
    todos: todosReducers
})

const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store
