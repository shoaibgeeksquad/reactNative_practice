import React from 'react';
import Navigations from './navigations'
import { createStore } from 'redux';
import allReducers from './store/reducer/index'
import { Provider } from "react-redux";
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const AuthHandler = () => {
    return (
        <>
            <Provider store={store}>
                <Navigations />
            </Provider>
        </>
    )
}

export default AuthHandler;