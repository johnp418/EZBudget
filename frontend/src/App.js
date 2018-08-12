import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';

import Transactions from './components/Transactions';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Transactions />
        </div>
      </Provider>
    );
  }
}

export default App;
