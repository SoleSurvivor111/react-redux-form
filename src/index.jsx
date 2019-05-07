import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers';
import AppContainer from 'containers/AppContainer';
import throttle from 'lodash/throttle';
import { loadState, saveState } from 'localStoreage';
import 'index.css';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(throttle(() => {
  saveState({
    fields: store.getState().fields,
    submit: store.getState().submit,
  });
}, 1000));
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
