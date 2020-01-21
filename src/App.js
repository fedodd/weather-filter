import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Provider, connect} from 'react-redux';
import './App.pcss';
import Dashboard from "./components/dashboard/dashboard";
import Filter from "./components/filter/filter";
import Form from "./components/form/form";
import * as actions from './store/actions';

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

  onCardClose = (city) => {
    this.props.deleteCity(city);
  }

  render() {

    let cities = this.props.cities.filter(city => !city.isHide)
    console.log('render app', this.props.cities, cities);

    return (
      <div className="App">
        <header className="App-header">
          <h1>Маябрь</h1>
        </header>
        <div className="App-controls">
          <Form />
          <Filter />
        </div>
        <Dashboard cities={cities} onCardClose={this.onCardClose}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    temperature: state.temperature
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCity: (city) => dispatch(
      actions.addCity(city)),
    deleteCity: (city) => dispatch(
      actions.deleteCity(city))
  };
}

const connectedApp = connect(
  mapStateToProps, mapDispatchToProps
)(App);

export default hot(connectedApp);
