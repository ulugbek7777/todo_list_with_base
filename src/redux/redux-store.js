import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import todoReducer from "./todo-reducer";


let reducers = combineReducers({
    todoPage: todoReducer,
    form: formReducer
});


let store = createStore(reducers);

window.store = store;


export default store;