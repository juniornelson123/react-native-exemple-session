import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import AppReducer from './reducers';
import Routes from './routes';

class App extends React.Component {
  store = applyMiddleware(thunk)(createStore)(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;

