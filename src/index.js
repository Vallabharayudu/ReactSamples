import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import Routers from './components/router';
//import JsonLearn from './components/jsonLearn';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import jquery from 'jquery';
window.$ = window.jQuery=jquery;
require ('bootstrap');


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <div>
      <div>
          <App />
      </div>

      <div className="row">
        
        <div className="col-md-9 col-lg-9 col-sm-8 col-xs-12">
            <Routers/>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  </Provider>
  , document.querySelector('.container-fluid'));
