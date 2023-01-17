import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import todoList from './redux/todoList/reducer';
import {BrowserRouter} from "react-router-dom";
import completed from './redux/completed/reducer';
import deleted from './redux/deleted/reducer';
import likeTasks from './redux/like/reducer';
import edit from './redux/edit/reducer'

const rootReducer = combineReducers({
    todo: todoList,
    completed,
    deleted,
    likeTasks,
    edit,
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
         </Provider>
    </BrowserRouter>
)
