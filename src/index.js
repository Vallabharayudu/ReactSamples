import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import FirstSample from './components/FirstSample';
import FormSample from './components/FormSample';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
    <App />
    <FirstSample/>
    <FormSample/>
    </div>
  </Provider>
  , document.querySelector('.container'));
