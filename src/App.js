import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Provider, connect} from 'react-redux';
import './App.pcss';
import Dashboard from "./components/dashboard/dashboard";
import Filter from "./components/filter/filter";
import Form from "./components/form/form";

import {
  createStore,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';

class App extends Component {

  state = {
    placeholder: 'Воронеж',
    autocompletionRequest: {
      componentRestrictions: {
        country: 'ru'
      },
       types: ['(cities)'],
    }
  }

  render() {
    console.log('i am render');

    return (
      <div className="App">
        <header className="App-header">
          <h1>Маябрь</h1>
        </header>
        <div className="App-controls">
          <Form />
          <Filter />
        </div>
        <Dashboard cities={this.props.cities}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCity: (city) => dispatch(
      actions.addCity(city))
  };
}

const connectedApp = connect(
  mapStateToProps, mapDispatchToProps
)(App);

export default hot(connectedApp);
