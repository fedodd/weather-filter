import React, { Component } from 'react';
import './App.css';
import Dashboard from "./components/dashboard/dashboard";
import Filter from "./components/filter/filter";
import Form from "./components/form/form";

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
    return (
      <div className="App">
        <header className="App-header">
          <h1>Маябрь</h1>
        </header>
        <div className="App-controls">
          <Form />
          <Filter />
        </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
