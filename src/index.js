
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect} from 'react-redux';
//import { createStore, applyMiddleware, compose } from "redux";

import './styles.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
//import reducer from "./store/reducer";
import store from "./store/store";
import "regenerator-runtime/runtime";

const ConnectedApp = connect((state) => {
  return state;
})(App);

// Container component
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
);

// ReactDOM.render( < App appTitle = "Маябрь" / > , document.getElementById('app'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
