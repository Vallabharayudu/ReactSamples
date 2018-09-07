import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import Routers from './components/router';
//import JsonLearn from './components/jsonLearn';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div className="row">
      <div className="col-md-3 col-lg-3 col-sm-4 col-xs-12">
          <App />
      </div>
      <div className="col-md-9 col-lg-9 col-sm-8 col-xs-12">
          <Routers/>
      </div>
      <div className="clearfix"></div>
    </div>
  </Provider>
  , document.querySelector('.container-fluid'));
